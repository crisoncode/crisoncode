import Fuse from "fuse.js";
import { useEffect, useRef, useState } from "react";
import Card from "@components/Card";
import slugify from "@utils/slugify";
import type { BlogFrontmatter } from "@content/_schemas";

export type SearchItem = {
	title: string;
	description: string;
	data: BlogFrontmatter;
	readingTime: number;
};

interface Props {
	searchList: SearchItem[];
}

interface SearchResult {
	item: SearchItem;
	refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputVal, setInputVal] = useState("");
	const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
		null
	);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputVal(e.currentTarget.value);
	};

	const fuse = new Fuse(searchList, {
		keys: ["title", "description"],
		includeMatches: true,
		minMatchCharLength: 2,
		threshold: 0.5,
	});

	useEffect(() => {
		// if URL has search query,
		// insert that search query in input field
		const searchUrl = new URLSearchParams(window.location.search);
		const searchStr = searchUrl.get("q");
		if (searchStr) setInputVal(searchStr);

		// put focus cursor at the end of the string
		setTimeout(function () {
			inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
				searchStr?.length || 0;
		}, 50);
	}, []);

	useEffect(() => {
		// Add search result only if
		// input value is more than one character
		let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
		setSearchResults(inputResult);

		// Update search string in URL
		if (inputVal.length > 0) {
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set("q", inputVal);
			const newRelativePathQuery =
				window.location.pathname + "?" + searchParams.toString();
			history.pushState(null, "", newRelativePathQuery);
		} else {
			history.pushState(null, "", window.location.pathname);
		}
	}, [inputVal]);

	return (
		<>
			<p
				style={{
					fontSize: "11px",
					color: `rgb(var(--color-text-base) / 0.45)`,
					fontFamily: "'IBM Plex Mono', monospace",
					marginBottom: "8px",
				}}
			>
				$ ls posts/
			</p>
			<label className="relative block">
				<span
					className="absolute inset-y-0 left-0 flex items-center pl-3"
					style={{
						color: `rgb(var(--color-text-base) / 0.45)`,
						fontFamily: "'IBM Plex Mono', monospace",
						fontSize: "13px",
					}}
				>
					$
				</span>
				<input
					className="block w-full border transition-all focus:outline-none"
					style={{
						background: "rgb(var(--color-card))",
						border: "1px solid rgb(var(--color-border))",
						borderRadius: "4px",
						padding: "9px 12px 9px 34px",
						fontFamily: "'IBM Plex Mono', monospace",
						fontSize: "13px",
						color: "rgb(var(--color-text-base))",
						width: "100%",
					}}
					placeholder="grep -i 'query' posts/"
					type="text"
					name="search"
					value={inputVal}
					onChange={handleChange}
					autoComplete="off"
					autoFocus
					ref={inputRef}
					onFocus={(e) => {
						e.currentTarget.style.borderColor = "rgb(var(--color-accent))";
					}}
					onBlur={(e) => {
						e.currentTarget.style.borderColor = "rgb(var(--color-border))";
					}}
				/>
				<style>{`
					input[name="search"]::placeholder {
						color: rgb(var(--color-text-base) / 0.45);
						opacity: 1;
					}
					input[name="search"]:focus {
						border-color: rgb(var(--color-accent));
						outline: none;
					}
				`}</style>
			</label>

			{inputVal.length > 1 && (
				<div className="mt-8">
					Found {searchResults?.length}
					{searchResults?.length && searchResults?.length === 1
						? " result"
						: " results"}{" "}
					for '{inputVal}'
				</div>
			)}

			<ul>
				{searchResults &&
					searchResults.map(({ item, refIndex }) => (
						<Card
							href={`/posts/${slugify(item.data)}`}
							frontmatter={item.data}
							readingTime={item.readingTime}
							key={`${refIndex}-${slugify(item.data)}`}
						/>
					))}
			</ul>
		</>
	);
}

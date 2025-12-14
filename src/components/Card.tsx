import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
	href?: string;
	frontmatter: BlogFrontmatter;
	secHeading?: boolean;
	readingTime?: number;
}

export default function Card({
	href,
	frontmatter,
	secHeading = true,
	readingTime,
}: Props) {
	const { title, pubDatetime, description } = frontmatter;
	return (
		<li className="group my-8 mb-20">
			<a
				href={href}
				className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 transition-all duration-200 hover:text-skin-accent/80 focus-visible:no-underline focus-visible:underline-offset-0"
			>
				{secHeading ? (
					<h2 className="mb-5 text-3xl font-medium decoration-dashed transition-all hover:underline md:text-4xl">
						{title}
					</h2>
				) : (
					<h3 className="mb-5 text-3xl font-medium decoration-dashed transition-all hover:underline md:text-4xl">
						{title}
					</h3>
				)}
			</a>
			<Datetime datetime={pubDatetime} readingTime={readingTime} />
			<p className="mt-2 text-lg leading-relaxed text-skin-base/80 md:text-xl">
				{description}
			</p>
		</li>
	);
}

import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
	href?: string;
	frontmatter: BlogFrontmatter;
	secHeading?: boolean;
	readingTime?: string;
}

export default function Card({
	href,
	frontmatter,
	secHeading = true,
	readingTime,
}: Props) {
	const { title, pubDatetime, description, tags = [] } = frontmatter;

	// Format date as "14 Dec 2025"
	const formattedDate = new Date(pubDatetime).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	const handleClick = () => {
		if (href) {
			window.location.href = href;
		}
	};

	return (
		<li
			className="border-t border-skin-line cursor-pointer py-5 transition-all duration-150 list-none animate-fadeUp"
			onClick={handleClick}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					handleClick();
				}
			}}
		>
			{/* Meta line: date + reading time */}
			<div className="flex flex-wrap gap-3 mb-1.5 text-xs opacity-45 text-skin-base">
				<span>{formattedDate}</span>
				{readingTime && <span>~{readingTime}</span>}
			</div>

			{/* Title */}
			{secHeading ? (
				<h2 className="text-base font-semibold mb-1.5 text-skin-base transition-colors duration-150 hover:text-skin-accent"
					style={{ letterSpacing: "-0.02em", lineHeight: 1.4 }}>
					{title}
				</h2>
			) : (
				<h3 className="text-base font-semibold mb-1.5 text-skin-base transition-colors duration-150 hover:text-skin-accent"
					style={{ letterSpacing: "-0.02em", lineHeight: 1.4 }}>
					{title}
				</h3>
			)}

			{/* Description */}
			{description && (
				<p className="text-sm mb-2 text-skin-base opacity-45" style={{ lineHeight: 1.6 }}>
					{description}
				</p>
			)}

			{/* Tags */}
			{tags.length > 0 && (
				<div className="flex flex-wrap gap-1.5">
					{tags.map((tag) => (
						<span
							key={tag}
							className="inline-block text-xs text-skin-secondary hover:text-skin-accent transition-colors duration-150"
						>
							#{tag}
						</span>
					))}
				</div>
			)}
		</li>
	);
}

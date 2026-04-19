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
			className="border-skin-line animate-fadeUp cursor-pointer list-none border-t py-5 transition-all duration-150"
			onClick={handleClick}
			role="button"
			tabIndex={0}
			onKeyDown={e => {
				if (e.key === "Enter" || e.key === " ") {
					handleClick();
				}
			}}
		>
			{/* Meta line: date + reading time */}
			<div className="text-skin-base mb-1.5 flex flex-wrap gap-3 text-xs opacity-45">
				<span>{formattedDate}</span>
				{readingTime && <span>~{readingTime}</span>}
			</div>

			{/* Title */}
			{secHeading ? (
				<h2
					className="text-skin-base hover:text-skin-accent mb-1.5 text-base font-semibold transition-colors duration-150"
					style={{ letterSpacing: "-0.02em", lineHeight: 1.4 }}
				>
					{title}
				</h2>
			) : (
				<h3
					className="text-skin-base hover:text-skin-accent mb-1.5 text-base font-semibold transition-colors duration-150"
					style={{ letterSpacing: "-0.02em", lineHeight: 1.4 }}
				>
					{title}
				</h3>
			)}

			{/* Description */}
			{description && (
				<p
					className="text-skin-base mb-2 text-sm opacity-45"
					style={{ lineHeight: 1.6 }}
				>
					{description}
				</p>
			)}

			{/* Tags */}
			{tags.length > 0 && (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
					{tags.map(tag => (
						<a
							key={tag}
							href={`/tags/${tag.toLowerCase().replace(/ /g, "-")}`}
							style={{
								display: "inline-block",
								border: "1px solid rgb(var(--color-border))",
								borderRadius: "2px",
								padding: "2px 7px",
								fontSize: "11px",
								fontWeight: 500,
								fontFamily: "'IBM Plex Mono', monospace",
								color: "rgba(var(--color-text-base), 0.5)",
								background: "transparent",
								textDecoration: "none",
								transition: "all 0.15s",
							}}
							onMouseEnter={e => {
								const el = e.currentTarget;
								el.style.color = "rgb(var(--color-secondary))";
								el.style.borderColor = "rgb(var(--color-secondary))";
								el.style.background = "rgba(var(--color-secondary), 0.12)";
							}}
							onMouseLeave={e => {
								const el = e.currentTarget;
								el.style.color = "rgba(var(--color-text-base), 0.5)";
								el.style.borderColor = "rgb(var(--color-border))";
								el.style.background = "transparent";
							}}
							onClick={e => e.stopPropagation()}
						>
							#{tag.toLowerCase().replace(/ /g, "-")}
						</a>
					))}
				</div>
			)}
		</li>
	);
}

import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
	href?: string;
	frontmatter: BlogFrontmatter;
	secHeading?: boolean;
	readingTime?: number;
}

export default function Card({ href, frontmatter, readingTime }: Props) {
	const { title, pubDatetime, description, tags = [] } = frontmatter;

	// ls -la date format: "Jun 11 2023"
	const d = new Date(pubDatetime);
	const mo = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	][d.getMonth()];
	const formattedDate = `${mo} ${String(d.getDate()).padStart(2, " ")} ${d.getFullYear()}`;

	// File size derived from reading time (~1000 chars/min)
	const mins = readingTime ?? 5;
	const chars = mins * 1000;
	const sizeStr = chars >= 1024 ? `${(chars / 1024).toFixed(1)}K` : `${chars}`;

	// Derive filename from title (normalize accents, slugify)
	const filename =
		title
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-|-$/g, "") + ".md";

	// Search data attribute for JS filtering
	const searchData =
		`${title} ${description ?? ""} ${tags.join(" ")}`.toLowerCase();

	return (
		<li
			className="post-row"
			data-search={searchData}
			data-tags={tags.map(t => t.toLowerCase().replace(/ /g, "-")).join(",")}
		>
			<a href={href} className="post-grid-link">
				<div className="post-grid">
					<span className="post-perms">-rw-r--r--</span>
					<span className="post-readtime">{mins}m</span>
					<span className="post-size">{sizeStr}</span>
					<span className="post-date">{formattedDate}</span>
					<div className="post-file">
						<span className="post-filename">{filename}</span>
						<div className="post-details">
							{description && <p className="post-desc">{description}</p>}
							{tags.length > 0 && (
								<div className="post-tags-row">
									{tags.map(tag => (
										<span key={tag} className="tag-badge">
											#{tag.toLowerCase().replace(/ /g, "-")}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</a>
		</li>
	);
}

export function getReadingTime(content: string): number {
	const cleanContent = content
		.replace(/```[\s\S]*?```/g, "")
		.replace(/`[^`]*`/g, "")
		.replace(/!\[.*?\]\(.*?\)/g, "")
		.replace(/\[.*?\]\(.*?\)/g, "")
		.replace(/<[^>]*>/g, "")
		.replace(/[#*_~]/g, "");

	const words = cleanContent
		.trim()
		.split(/\s+/)
		.filter(word => word.length > 0);

	const wordCount = words.length;
	const wordsPerMinute = 200;
	const readingTime = Math.ceil(wordCount / wordsPerMinute);

	return readingTime;
}

export function formatReadingTime(minutes: number): string {
	return `${minutes} min read`;
}

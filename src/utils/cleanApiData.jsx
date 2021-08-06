export const cleanupApiData = topStories => {
	const cleanedData = topStories.map((story, i) => {
		const publishedDate = story.published_date.split('T')[0]
		return {
			id: i,
			section: story.section,
			title: story.title,
			abstract: story.abstract,
			pic: story.multimedia[0].url,
			photographer: story.multimedia[0].copyright,
			caption: story.multimedia[0].caption,
			writers: story.byline,
			date: publishedDate,
			actualArticle: story.url,
		}
	})
	return cleanedData
}

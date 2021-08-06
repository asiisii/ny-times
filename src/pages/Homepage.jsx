import React, { useState } from 'react'
import { Card } from '../components/card/Card'
import { Navbar } from '../components/navbar/Navbar'
import { SearchBar } from '../components/searchbar/SearchBar'
import { checkForError } from '../utils/apiCalls'

export const Homepage = ({ topStories, statusCode, fetchedError }) => {
	const [searchText, setSearchText] = useState('')
	const [filteredStories, setFilteredStories] = useState([])
	const [error, setError] = useState('')

	const handleChange = e => {
		e.preventDefault()
		let query = e.target.value.toLowerCase()
		setSearchText(query)
		getSearchedStory(query)
	}

	const getSearchedStory = query => {
		setError('')

		if (query.length) {
			const searchedStories = topStories.filter(
				story =>
					story.section.includes(query) ||
					story.title.toLowerCase().includes(query)
			)
			!searchedStories.length
				? setError('Sorry no results found')
				: setFilteredStories(searchedStories)
		} else {
			setFilteredStories([])
		}
	}

	const getStoriesData = () => {
		return filteredStories.length ? filteredStories : topStories
	}

	const displayCards = getStoriesData().map(story => {
		return (
			<Card
				key={story.id}
				id={story.id}
				title={story.title}
				writers={story.writers}
				pic={story.pic}
				section={story.section}
			/>
		)
	})

	return (
		<React.Fragment>
			<Navbar />
			<SearchBar searchText={searchText} handleChange={handleChange} />
			{fetchedError && !error && checkForError(statusCode)}
			{!fetchedError && error && <h1 className='error-msg'>{error}</h1>}
			{!fetchedError && !error && !topStories.length && (
				<h1 className='error-msg'>Loading...</h1>
			)}
			{!error && displayCards}
		</React.Fragment>
	)
}

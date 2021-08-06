import React, { useEffect, useState } from 'react'
import { fetchTopStories } from './utils/apiCalls'
import { cleanupApiData } from './utils/cleanApiData'
import { Switch, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { DetailsPage } from './pages/DetailsPage'

export const App = () => {
	const [fetchedError, setFetchedError] = useState(false)
	const [statusCode, setStatusCode] = useState(200)
	const [topStories, setTopStories] = useState([])

	useEffect(() => {
		const getNYTopStories = async () => {
			setFetchedError(false)
			try {
				const res = await fetchTopStories()
				setStatusCode(res.status)
				const data = await res.json()
				const cleanedData = cleanupApiData(data.results)
				setTopStories(cleanedData)
			} catch (error) {
				setFetchedError(true)
			}
		}
		getNYTopStories()
	}, [])

	return (
		// topStories.length && (
			<Switch>
				<Route exact path='/'>
					<Homepage
						topStories={topStories}
						statusCode={statusCode}
						fetchedError={fetchedError}
					/>
				</Route>
				<Route
					path='/:id'
					render={({ match }) => {
						return <DetailsPage id={match.params.id} topStories={topStories} />
					}}
				/>
			</Switch>
		// )
	)
}

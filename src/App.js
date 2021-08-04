import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'

export const App = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Homepage />
			</Route>
		</Switch>
	)
}

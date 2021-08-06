const apiKey = process.env.REACT_APP_NYTIMES_API_KEY

export const fetchTopStories = async () => {
	return await fetch(
		`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
	)
}

export const checkForError = status => {
	let errorMsg
	switch (status) {
		case 401:
			errorMsg = 'Sorry, please check your api key'
			break
		case 404:
			errorMsg = "Sorry, we couldn't find news you were looking for"
			break
		case 500:
			errorMsg = 'Internal Server Error. Our whole team are now aware.'
			break
		default:
			errorMsg = 'Oops! Request failed. Please try again.'
	}

	return <h1 className='error-msg'>{errorMsg}</h1>
}

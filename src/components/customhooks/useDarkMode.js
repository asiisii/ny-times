import { useState, useEffect } from 'react'

export const useDarkMode = () => {
	const [isDark, setIsDark] = useState(() => {
		try {
			const item = window.localStorage.getItem('isDarkMode')
			return item ? JSON.parse(item) : undefined
		} catch (e) {
			return false
		}
	})

	useEffect(() => {
		isDark
			? window.document.body.classList.add('dark')
			: window.document.body.classList.remove('dark')

		try {
			window.localStorage.setItem('isDarkMode', isDark)
		} catch (e) {
			console.error('unable to access localstorage')
		}
	}, [isDark])

	return [isDark, setIsDark]
}

import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useDarkMode } from '../customhooks/useDarkMode'
import './Navbar.css'

export const Navbar = () => {
	const [isDark, setIsDark] = useDarkMode()

	return (
		<div className='navbar'>
			<div className='navbar__wrapper'>
				<h2 className='navbar__title'>NY Times</h2>
				<button className='night-mode' onClick={() => setIsDark(!isDark)}>
					{isDark ? <BsSun className='sun' /> : <BsMoon />}
				</button>
			</div>
		</div>
	)
}

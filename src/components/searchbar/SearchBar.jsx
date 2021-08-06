import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

export const SearchBar = ({ searchText, handleChange }) => {
	return (
		<div className='searchbar'>
			<div className='searchbar__container'>
				<BsSearch className='searchbar__icon'/>
				<input
					type='search'
					name='search'
					autoComplete='off'
					placeholder='Search either by categories or title...'
					value={searchText}
					onChange={e => handleChange(e)}
				/>
			</div>
		</div>
	)
}

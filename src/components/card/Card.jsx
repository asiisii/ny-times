import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export const Card = props => {
	const { id, title, writers, pic } = props

	return (
		<div className='card'>
			<div className='card__wrapper'>
				<div className='card__left-section'>
					<Link to={`/${id}`}>{title}</Link>
					<p>{writers}</p>
				</div>
				<div className='card__right-section'>
					<img src={pic} alt='article pic' />
				</div>
			</div>
		</div>
	)
}

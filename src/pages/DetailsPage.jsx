import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import backbtn from '../utils/back-button.png'
import './DetailsPage.css'

export const DetailsPage = ({ id, topStories }) => {
	const storyID = parseInt(id)

	const selectedArticle = topStories.find(story => story.id === storyID)

	const {
		title,
		abstract,
		pic,
		photographer,
		caption,
		writers,
		date,
		actualArticle,
	} = selectedArticle

	return (
		<React.Fragment>
			<Navbar />
			<div className='detailspage'>
				<Link to='/'>
					<img src={backbtn} alt='back-button' className='back-btn' />
				</Link>
				<h1 className='detailspage__title'>{title}</h1>
				<p className='detailspage__abstract'>{abstract}</p>
				<img className='detailspage__img' src={pic} alt='article pic' />
				<p className='detailspage__photographer'> {photographer}</p>
				<p className='detailspage__caption'>{caption}</p>
				<a className='detailspage__link' href={actualArticle}>
					Click Me To Read This Article
				</a>
				<h3 className='detailspage__writers'>Written {writers}</h3>
				<p className='detailspage__date'>{date}</p>
			</div>
		</React.Fragment>
	)
}

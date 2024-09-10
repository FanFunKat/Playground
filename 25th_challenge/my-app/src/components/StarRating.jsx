import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
	// Initialize a 'courseRating' state
	const [courseRating, setCourseRating] = useState(0);

	// Write a function that returns 5 Star components
	const renderStars = () => {
		const starsArray = [];
		const maxRating = 5;
		for (let i = 0; i < maxRating; i++) {
			starsArray.push(<Star
				key={i}
				isSelected={i < courseRating}
				setRating={() => updateRating(i + 1)}
			/>);
		}
		return starsArray;
	};

	// Write an event handler that updates the courseRating state based on the star a user clicks.That function will be passed down to each Star component via props and called when a user clicks a star.
	// Pass the function to a Star component via props

	const updateRating = (rating) => {
		if (courseRating === rating) { //resets rating to 0
			setCourseRating(0);
			return;
		} else {
			setCourseRating(rating);
		}
	};

	return (
		<ul className='course--stars'>
			{/* Render the Star components */}
			{renderStars()}
		</ul>
	);
}

export default StarRating;
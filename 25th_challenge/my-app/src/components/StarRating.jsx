import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
	// Initialize a 'courseRating' state
	const [courseRating, setCourseRating] = useState(0);

	// Write a function that returns 5 Star components
	const renderStars = () => {
		const starsArray = [];
		for (let i = 0; i < 5; i++) {
			starsArray.push(<Star
				key={i}
				isSelected={i <= courseRating}
				handleClick={() => updateRating(i)}
			/>);
		}
		return starsArray;
	};

	// Write an event handler that updates the courseRating state based on the star a user clicks.That function will be passed down to each Star component via props and called when a user clicks a star.
	// Pass the function to a Star component via props

	const updateRating = (rating) => {
		setCourseRating(rating);
	};

	return (
		<ul className='course--stars'>
			{/* Render the Star components */}
			{renderStars()}
		</ul>
	);
}

export default StarRating;
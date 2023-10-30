// import { Heroes } from "../Data/Data";
import './_Card.scss';

import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { Rating } from './Rating/Rating';

export function Card(props) {
	const { name, universe, alterego, occupation, friends, superpowers, url, info } = props.hero;
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
			<div className="card" onClick={() => setFlip(!flip)}>
				<h2 className="title">{name}</h2>
				<div className="description">
					<div className="text">{universe}</div>
					<div className="text">{alterego}</div>
					<div className="text">{occupation}</div>
					<div className="text">{friends}</div>
					<div className="text">{superpowers}</div>
				</div>
				<img src={url} className="image" alt={name} />
				<Rating />
			</div>
			<div className="card" onClick={() => setFlip(!flip)}>
				<div className="text">{info}</div>
			</div>
		</ReactCardFlip>
	);
}

// import { Heroes } from "../Data/Data";
import './_Card.scss';


import { Rating } from './Rating/Rating';

export function Card(props) {
    const { name, universe, alterego, occupation, friends, superpowers, url } = props.hero;
    return (
        <div className="hero">
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
    );
}
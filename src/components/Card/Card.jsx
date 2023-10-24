import {Heroes} from '../Data/Data';

import './_Card.scss';

import {Rating} from './Rating/Rating';

export function Card() {
    return (
        <div className="App">
            <div>
                {Heroes[0].name}
            </div>
            <Rating/>
        </div>
    );
}

// export default Card
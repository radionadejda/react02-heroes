// import { Heroes } from "../Data/Data";
import './_Card.scss';


import { Rating } from './Rating/Rating';

export function Card() {
    return (
        <div class="hero">
            <h2 class="title">зеленый велосипед</h2>
            <div class="description">
                <div class="text">да</div>
                <div class="text">красный велосипед</div>
                <div class="text">roll, baby, roll</div>
                <div class="text">синий велосипед, серебристый мопед</div>
                <div class="text">зеленый велосипед настолько же быстр, как его ездок</div>
            </div>
            <img src="https://shulz.ru/upload/small_1673211680420big.webp" class="image" alt="зеленый велосипед" />
            <Rating />
        </div>
    );
}

// export default Card

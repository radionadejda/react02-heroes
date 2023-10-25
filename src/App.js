import './_App.scss';
import './components/Card/_Card.scss';
import {heroes} from './components/Data/Data.js';
import { Card } from './components/Card/Card.jsx';

function App() {
    return (
        <div className="body">
            <h1 className="main title">Массив супергероев</h1>
            <h2 className="title">Вот такие супергерои у нас есть</h2>
            <div className="catalogue" id="catalogue">
                {
                    heroes.map((hero, index) => (
                        <Card key={index} hero={hero} />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
import './_App.scss';
import { heroes } from './components/Data/Data.js';
import { Card } from './components/Card/Card.jsx';

function App() {
    return (
        <div className="body">
            <div className="catalogue" id="catalogue">
                {heroes.map((hero, index) => <Card key={index} hero={hero} />)}
            </div>
        </div>
    );
}

export default App;

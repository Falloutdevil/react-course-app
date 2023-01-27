
import {Costs} from './components/Costs/Costs';


const App = () => {

    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.99
        },
        {
            date: new Date(2021, 11, 25),
            description: 'MacBook',
            amount: 1500.99
        },
        {
            date: new Date(2021, 4, 12),
            description: 'Book',
            amount: 100.99
        }
    ];

    return (
        <div>
            <h1>Начнём React</h1>
            <Costs costs={costs}/>
        </div>
    );
};

export default App;

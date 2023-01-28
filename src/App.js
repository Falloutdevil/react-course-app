import {Costs} from './components/Costs/Costs';
import {NewCost} from './components/NewCost/NewCost';
import {useState} from 'react';

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2020, 2, 12),
        description: 'Холодильник',
        amount: 999.99
    },
    {
        id: 'c2',
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1500.99
    },
    {
        id: 'c3',
        date: new Date(2021, 4, 12),
        description: 'Book',
        amount: 100.99
    }
];


const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevState => {
            return [cost, ...costs]
        });
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
};

export default App;

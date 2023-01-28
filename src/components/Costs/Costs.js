import './Costs.css'
import {CostItem} from './CostItem';
import {Card} from '../UI/Card';
import CostFilter from './CostFilter';
import {useState} from 'react';

export const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })

    let costsContent = <p>В этом году расходов нет</p>;

    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map(cost => {
            return (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            )
        })
    }

    return (
        <>
            <Card className="costs">
                <CostFilter onChangeYear={yearChangeHandler} year={selectedYear}/>
                {costsContent}
            </Card>
        </>
    )
}
import './Costs.css'
import {CostItem} from './CostItem';
import {Card} from '../UI/Card';
import CostFilter from './CostFilter';
import {useState} from 'react';

export const Costs = (props) => {

    const [selectedYear, setSelectedYear] =useState('2022')

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }
    
    return (
        <>
            <Card className="costs">
                <CostFilter onChangeYear={yearChangeHandler} year={selectedYear}/>
                <CostItem date={props.costs[0].date} description={props.costs[0].description}
                          amount={props.costs[0].amount}/>
                <CostItem date={props.costs[1].date} description={props.costs[1].description}
                          amount={props.costs[1].amount}/>
                <CostItem date={props.costs[2].date} description={props.costs[2].description}
                          amount={props.costs[2].amount}/>
            </Card>
        </>
    )
}
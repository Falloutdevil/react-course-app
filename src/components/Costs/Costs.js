import './Costs.css'
import {Card} from '../UI/Card';
import CostFilter from './CostFilter';
import {useState} from 'react';
import {CostList} from './CostList';
import {CostsDiagrams} from './CostsDiagrams';

export const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })



    return (
        <>
            <Card className="costs">
                <CostFilter onChangeYear={yearChangeHandler} year={selectedYear}/>
                <CostsDiagrams costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </>
    )
}
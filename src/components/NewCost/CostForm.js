import React, {useState} from 'react';
import './CostForm.css'

export const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //      name: '',
    //      amount: '',
    //      date: ''
    //  });

    const nameChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     name: event.currentTarget.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         name: event.currentTarget.value
        //     }
        // })
        setInputName(event.currentTarget.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.currentTarget.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.currentTarget.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input
                    type="text"
                    value={inputName}
                    onChange={nameChangeHandler}
                />
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input
                    value={inputAmount}
                    onChange={amountChangeHandler}
                    type="number"
                    min="0.01"
                    step="0.01"
                />
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input
                    value={inputDate}
                    onChange={dateChangeHandler}
                    type="date"
                    min="2019-01-01"
                    step="2022-12-31"
                />
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить расход</button>
                <button type="button" onClick={props.onCancel}>
                    Отмена
                </button>
            </div>
        </div>
    </form>


};


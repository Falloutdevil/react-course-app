import React from 'react';
import './CostForm.css'

export const CostForm = () => {
    return <form>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text"/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" min="0.01" step="0.01"/>
            </div>

            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" min="2019-01-01" step="2022-12-31"/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить расход</button>
            </div>
        </div>
    </form>


};

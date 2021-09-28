import { useState } from 'react';

import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const titleChangeHandler = () => {
        setTitle('New title');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
            <button onClick={titleChangeHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

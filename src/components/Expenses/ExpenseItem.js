import { useState } from "react";
import "../Expenses/ExpenseItem.css";
import Card from '../UI/Card';
import ExpenseDate from "../Expenses/ExpenseDate";

const ExpenseItem = (props) => {

	const [title, setTitle] = useState(props.title);
	const [items, setItems] = useState([]);

	const clickHandler = () => {
		setTitle('updated');
		// props.onDelete(props.id)
	};	
	const deleteItem = id => {
		setItems(prevItems => {
			return prevItems.filter(index => {
				return index !== id;
			});
		});
	}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
			<button onClick={deleteItem}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;

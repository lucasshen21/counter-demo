import { Fragment } from 'react';

const Counter = (props) => {
	const { value, id, onChangeCount, removeCounter } = props

  return (
    <Fragment>
			<div className="counter">
				<span>{value}</span>
				<button onClick={() => onChangeCount(true, id)}>+</button>
				<button onClick={() => onChangeCount(false, id)}>-</button>
				<button onClick={() => removeCounter(id)} className="remove">Remove</button>
			</div>
    </Fragment>
  );
};

export default Counter;
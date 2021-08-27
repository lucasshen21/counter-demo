import { Fragment } from 'react';

import Counter from './Counter';

const ListCounter = (props) => {
	const { counters, onChangeCount, addCounter, removeCounter } = props;

  return (
    <Fragment>
			<div className="spacer">
				{counters.map(counter => (
					<Counter value={counter.value} id={counter.id} onChangeCount={onChangeCount} removeCounter={removeCounter} key={`counter${counter.id}`} />
				))}
				<div>
      		<button className="add" onClick={() => addCounter()}>Add counter</button>
				</div>
			</div>
    </Fragment>
  );
};

export default ListCounter;

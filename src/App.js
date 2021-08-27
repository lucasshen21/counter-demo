import './App.css';

import { Fragment, useState } from 'react';

import ListCounter from './components/ListCounter';

const App = () => {
  const [counters, setCounters] = useState([{id: 0, value: 0}]);
  const [added, setAdded] = useState(1);

  const onChangeCount = (add, id) => {
    const newCounters = [...counters];
    var index;
    for(let _i = 0; _i < counters.length; _i ++) {
      if(counters[_i].id === id) {
        index = _i;
      }
    }
    if(add) {
      newCounters[index].value ++;
    }
    else {
      newCounters[index].value --;
    }
      setCounters(newCounters);
  };

  const addCounter = () => {
    const newCounters = [...counters];
    newCounters.push({id: added, value: 0});
    setAdded(added + 1);
    setCounters(newCounters);
  }

  const removeCounter = (id) => {
    const newCounters = counters.filter(counter => counter.id !== id);
    setCounters(newCounters);
  }

  return (
    <Fragment>
      <ListCounter counters={counters} onChangeCount={onChangeCount} addCounter={addCounter} removeCounter={removeCounter} />
    </Fragment>
  );
};

export default App;

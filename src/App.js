import React from 'react';
import Store from './stores/Store';

var unsub = Store.subscribe(function () {
  console.log('STATE UPDATED:', Store.getState());
})


console.log('state', Store.getState());
console.log('************\ndispatch action INCREMENT:');
Store.dispatch({ type: 'INCREMENT' });

console.log('************\ndispatch action INCREMENT:');
Store.dispatch({ type: 'INCREMENT' });

unsub();

console.log('************');
console.log('dispatch action DECREMENT:');
Store.dispatch({ type: 'DECREMENT' });

console.log('************');
console.log('dispatch action RESET');
Store.dispatch({ type: 'RESET' });

function App() {
  return (
    <div className="App">
      {/* {console.log('state', Store.getState())} */}
    </div>
  );
}

export default App;

var defaultState = 0;

var reducer = function (state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return defaultState;
    default:
      return state;
  }
}

function createStore(reducer) {
  var state;
  var subscriptions = [];

  var obj = {
    getState: function () {
      return state;
    },
    dispatch: function (action) {
      state = reducer(state, action);
      subscriptions.forEach(function (fn) {
        fn();
      })
    },
    subscribe: function (fn) {
      subscriptions.push(fn);

      return function unsubscribe() {
        // find listener fn in sub array and remove it
        var index = subscriptions.indexOf(fn);
        subscriptions.splice(index, 1);
      }
    }
  }

  obj.dispatch({ type: 'REDUX_INIT' });
  return obj;
}

var Store = createStore(reducer);

export default Store;
// import { createStore } from 'redux';
// ES5
const { createStore } = require("redux");

const intitialState = {
  counter : 0
}
// Reducer
function rootReducer(state = intitialState, action){
  if(action.type === "INCREMENT"){
    return {
      counter : state.counter + 1
    }
  } else if(action.type === "DECREMENT"){
    return {
      counter : state.counter - 1
    }
  } else if(action.type === 'ADD'){
    return {
      counter : state.counter + action.value
    }
  }
  return state;
}

const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => {
  console.log('[SUBS]', store.getState());
})

// Action
store.dispatch({type : "INCREMENT"});

// console.log("[Increment]", store.getState());

store.dispatch({type : "DECREMENT"});

store.dispatch({type : "ADD", value : 10});

// console.log("[Decrement]", store.getState());



import { Action } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions';

const initialState = {
  counter : 0,
  result : []
}

export function rootReducer(
  state : {counter : number} = initialState,
  action: counterActions.ActionsCounter) {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        counter : state.counter + 1
      }
    case counterActions.DECREMENT:
      return {
        counter : state.counter - 1
      }
    case counterActions.ADD:
      return {
        counter : state.counter + action.value
      }
    case counterActions.SUBTRACT:
      return {
        counter : state.counter - action.value
      }

    default:

  return state;
  }
}

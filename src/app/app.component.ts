import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterAction from './store/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My awesome App';
  childValue : string;
  bool = true;
  counter = 0;
  onToggle() {
    this.bool = !this.bool;
  }

  handleEvent(value){
    console.log(`Data from Child : ${value}`);
    this.childValue = value;
  }

  constructor(private store : Store<any>){}

  ngOnInit(){
    this.store.subscribe(state => {
      // console.log(state);
      this.counter = state.countReducer.counter;
    })
  }

  onIncrease(){
    // this.store.dispatch({type : counterAction.INCREMENT})
    this.store.dispatch(new counterAction.Increase());
  }
  onDecrease(){
    // this.store.dispatch({type : counterAction.DECREMENT})
    this.store.dispatch(new counterAction.Decrease());
  }

  onAdd(value : number){
    this.store.dispatch(new counterAction.Add(value));
  }
  onSubtract(value : number){
    this.store.dispatch(new counterAction.Subtract(value));
  }

  onStore(){
    // dispatch the STORE_RESULT
  }

}

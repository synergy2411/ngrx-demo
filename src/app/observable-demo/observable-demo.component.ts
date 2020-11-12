import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  sub: Subscription;

  obs$ = new Observable(observer => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 2000);
    setTimeout(() => {
      observer.next('Third Package');
      // observer.error(new Error('Something bad happened'));
    }, 4000);
    setTimeout(() => {
      observer.next('Fourth Package');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 7000);
  });

  values = [];

  onSub() {
    this.sub = this.obs$.pipe(tap((val)=>{
      console.log('TAP : ', val);
      return val;
    })).pipe(map(response => 'My ' + response)).subscribe(
      (response) => this.values.push(response),
      (err) => console.log(err),
      () => console.log('COMPLETED')
    );
  }

  onUnsub() {
    this.sub.unsubscribe();
  }

}

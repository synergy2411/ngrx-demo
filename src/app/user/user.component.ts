import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() title : string;
  childValue : string = 'Value form Child';
  @Output() childEvent = new EventEmitter<string>();

  onEmit(){
    this.childEvent.emit(this.childValue);
  }

  constructor() { }

  ngOnInit() {
  }

}

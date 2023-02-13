import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decreament, Increament, Reset, actionType } from 'src/app/actions/user-action';
import { RootReducerState, getUser, getUserInput } from 'src/app/reducer';
import { getValue } from 'src/app/reducer/user-reducer';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent implements OnInit {
  value!: number;
  constructor(private store: Store<RootReducerState>) {}

  ngOnInit(): void {
    this.store.select(getUserInput).subscribe((data: any) => {
      console.log(data);
      this.value = data;
    });
  }
  onIncreament(){
    this.store.dispatch(new Increament())
  }
  onDecreament(){
    this.store.dispatch(new Decreament())
  }
  onReset(){
    this.store.dispatch(new Reset())
  }
}

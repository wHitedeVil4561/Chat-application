import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { RootReducerState, getUserInput } from 'src/app/reducer';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit,OnDestroy {
  constructor(private store:Store<RootReducerState>) {}
  count!:number;
  value$!:Subscription;
  ngOnInit(): void {
    this.value$ = this.store.select(getUserInput).subscribe((data:any)=>{
      this.count = data;
      console.log(this.count,'=================>');
      
    })
  }
  chats = [
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: this.count,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 1,
    },
  ];
  formatMsg(message:any){
    if(message.length<=25){
      return message
    }
    return message.slice(0, 25) + "..."
  }
  ngOnDestroy(): void {
    
    this.value$.unsubscribe()
  }
}

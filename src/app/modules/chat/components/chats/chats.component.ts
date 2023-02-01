import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  chats = [
    {
      profilePath: 'assets/img/profile-circle.png',
      status: 'ACTIVE',
      userName: 'Sumit Gupta',
      lastMsg: 'Hey! I am avaliable Hey! I am avaliable',
      lastMsgTime: '05 min',
      unreadMsgCount: 0,
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
}

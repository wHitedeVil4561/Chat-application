import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent implements OnInit {
  constructor(private socket: Socket) {}
  // socket: any;
  SOCKET_ENDPOINT = 'localhost:3000';
  message: string = '';
  messageArray: any = [];
  ngOnInit(): void {
    // this.setupSocketConnection();
    this.onReceiveMsg();
  }
  setupSocketConnection() {
    // this.socket = io(this.SOCKET_ENDPOINT);
  }
  onSend() {
    if (this.socket && this.message) {
      this.socket.emit('message', this.message);
      this.messageArray.push({ author: 'me', message: this.message });
      this.message = '';
    }
  }
  onReceiveMsg() {
    console.log('fkjldsajfl');

    this.socket.on('message-broadcast', (message: string) => {
      console.log(message);

      this.messageArray.push({ author: 'other', message });
    });
  }
}

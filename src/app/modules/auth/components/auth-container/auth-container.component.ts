import { Component, OnInit } from '@angular/core';
import { authAnimation } from 'src/app/utils/animation';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
  animations: [authAnimation],
})
export class AuthContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getRouteData(outlet: any) {
    if (outlet.isActivated) {
      console.log(outlet.activatedRouteData['screen']);
      return outlet.activatedRouteData['screen'];
    }
  }
}

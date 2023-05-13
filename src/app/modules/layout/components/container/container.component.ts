import { Component, OnInit } from '@angular/core';
import { routeAnimation } from 'src/app/utils/animation';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [routeAnimation],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getAnimation(route: any) {
    // console.log(route);
    // console.log(rout);
    if (route.isActivated) {
      // console.log(route.activatedRouteData['screen']);
      return route.activatedRouteData['screen'];
    }

    // console.log(this.router.getContext(''));

    // return this.router.getContext('primary')?.route?.snapshot.data['screen'];
    // if (this.router.isActivated) {
    //   return this.router.activatedRouteData['screen'];
    // }
  }
}

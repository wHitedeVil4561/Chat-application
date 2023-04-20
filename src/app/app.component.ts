import { Component } from '@angular/core';
import { routeAnimation } from './utils/animation';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation],
})
export class AppComponent {
  constructor(private router: ChildrenOutletContexts) {}
  getAnimation(route: any) {
    console.log(route);
    // console.log(rout);
    if (route.isActivated) {
      console.log(route.activatedRouteData['screen']);
    }

    // console.log(this.router.getContext(''));

    // return this.router.getContext('primary')?.route?.snapshot.data['screen'];
    // if (this.router.isActivated) {
    //   return this.router.activatedRouteData['screen'];
    // }
  }
  title = 'chat';
}

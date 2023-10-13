import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outletData',
  pure: false,
})
export class OutletDataPipe implements PipeTransform {
  transform(route: any, ...args: unknown[]): any {
    if (route?.isActivated) {
      return route.activatedRouteData['screen'];
    }
  }
}

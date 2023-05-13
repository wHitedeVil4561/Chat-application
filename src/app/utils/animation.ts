import {
  animate,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('*=>*', [
    style({ position: 'relative', width: 'content-fit' }),
    // style({ position: 'absolute', left: '76px' }),
    // query(':enter,:leave', [style({ position: 'absolute' })]),
    query(':enter', [style({ opacity: 0 })]),
    query(':enter, :leave', [
      style({
        width: '100%',
        position: 'absolute',
        height: '100%',
      }),
    ]),
    query(
      ':leave',
      [animate(500, style({ opacity: 0, transform: 'translateY(80px)' }))],
      {
        optional: true,
      }
    ),
    query(
      ':enter',

      [
        style({ transform: 'translateY(-80px)' }),
        animate(500, style({ opacity: 1, transform: 'translateY(0)' })),
      ],
      {
        optional: true,
      }
    ),
    group([]),
    // group([

    // ]),
  ]),
]);

export const authAnimation = trigger('authAnimation', [
  state('front', style({ transform: 'rotateY(0deg)' })),
  state('back', style({ transform: 'rotateY(0deg)' })),
  transition('front => back', [
    style({ transform: 'rotateY(180deg)' }),
    animate('500ms ease-out', style({ transform: 'rotateY(0deg)' })),
  ]),
  transition('back => front', [
    style({ transform: 'rotateY(-180deg)' }),
    animate('500ms ease-out', style({ transform: 'rotateY(0deg)' })),
  ]),
  //   transition('front => back', [
  //     animate(
  //       '6000ms ease-out',
  //       style({ transform: 'rotateY(-180deg) translateX(100%)' })
  //     ),
  //   ]),
  //   transition('back => front', [
  //     style({ transform: 'rotateY(-180deg) translateX(-100%)' }),
  //     animate(
  //       '6000ms ease-out',
  //       style({ transform: 'rotateY(0deg) translateX(0%)' })
  //     ),
  //   ]),
]);

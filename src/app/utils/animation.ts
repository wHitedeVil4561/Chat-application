import {
  animate,
  group,
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

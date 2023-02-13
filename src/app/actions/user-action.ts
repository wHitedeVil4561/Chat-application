export enum actionType {
  INCREAMENT = 'increament',
  DECREAMENT = 'decreament',
  RESET = 'reset',
}

export class Increament{
    readonly type = actionType.INCREAMENT;
}

export class Decreament{
    readonly type = actionType.DECREAMENT;
}

export class Reset{
    readonly type = actionType.RESET;
}


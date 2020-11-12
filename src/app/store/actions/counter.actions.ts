
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

// Action Creators

export class Increase {
  readonly type = INCREMENT;
  constructor() {}
}
export class Decrease {
  readonly type = DECREMENT;
  constructor() {}
}

export class Add {
  readonly type = ADD;
  constructor(public value: number) {}
}

export class Subtract {
  readonly type = SUBTRACT;
  constructor(public value: number) {}
}

export type ActionsCounter = Increase | Decrease | Add | Subtract ;

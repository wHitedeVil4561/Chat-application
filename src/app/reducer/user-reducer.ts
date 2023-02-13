import { Action } from "../actions";
import { actionType } from "../actions/user-action";

export interface UserReducerState {
  inputValue: number;
}

const initialState: UserReducerState = {
  inputValue: 0,
};

export function UserReducer(state = initialState,action:Action){
    switch (action.type){
        case actionType.INCREAMENT:{
            let value = state.inputValue + 1;
            return {...state,inputValue:value}
        }
        case actionType.DECREAMENT:{
            let value = state.inputValue - 1;
            return {...state,inputValue:value}
        }
        case actionType.RESET:{
            return {...state,inputValue:0}
        }
        default:{
            return state
        }
    }
}


export const getValue = (state:UserReducerState)=>state.inputValue
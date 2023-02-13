import { ActionReducerMap, createSelector } from "@ngrx/store";
import { UserReducer, UserReducerState, getValue } from "./user-reducer";

export interface RootReducerState{
    users:UserReducerState
}

export const rootReducer:ActionReducerMap<RootReducerState> ={
    users:UserReducer
}

export const getUser = (state:RootReducerState)=>state.users;

export const getUserInput = createSelector(getUser,getValue);
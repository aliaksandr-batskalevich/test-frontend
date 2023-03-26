import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AppActionsType, appReducer} from "./app.reducer";
import {UsersActionsType, usersReducer} from "./users.reducer";


export type RootActionsType = AppActionsType | UsersActionsType;
export type RootStateType = ReturnType<typeof rootState>;

const rootState = combineReducers({
    app: appReducer,
    users: usersReducer
});

export const store = legacy_createStore(rootState, applyMiddleware(thunkMiddleware));
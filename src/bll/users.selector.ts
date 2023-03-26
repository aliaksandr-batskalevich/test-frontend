import {RootStateType} from "./store";
import {IUser} from "../models/IUser";


export const getIsUsersFetching = (state: RootStateType): boolean => state.users.isUsersFetching;
export const getUsers = (state: RootStateType): Array<IUser> => state.users.users;
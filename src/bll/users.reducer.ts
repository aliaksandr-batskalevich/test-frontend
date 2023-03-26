import {IUser} from "../models/IUser";
import axios from 'axios';
import {ThunkDispatchType} from "../utils/hooks/useAppDispatch";
import usersApi from '../dal/users.api';

export type UsersActionsType = ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsUsersFetching>;

type UsersStateType = {
    isUsersFetching: boolean
    totalCount: number
    users: Array<IUser>
};

const usersInitState = {
    isUsersFetching: false,
    totalCount: 0,
    users: [] as Array<IUser>
};

export const usersReducer = (state: UsersStateType = usersInitState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "SET_IS_USERS_FETCHING":
            return {...state, ...action.payload};
        case "SET_TOTAL_COUNT":
            return {...state, ...action.payload};
        case "SET_USERS":
            return {...state, ...action.payload};
        default:
            return state;
    }
};

const setIsUsersFetching = (isUsersFetching: boolean) => {
    return {
        type: 'SET_IS_USERS_FETCHING',
        payload: {isUsersFetching}
    } as const;
};
const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        payload: {totalCount}
    } as const;
};
const setUsers = (users: Array<IUser>) => {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const;
};

export const getUsersTC = () => async (dispatch: ThunkDispatchType) => {
    try {
        setIsUsersFetching(true);

        const result = await usersApi.getUsers();
        dispatch(setTotalCount(result.data.totalCount));
        dispatch(setUsers(result.data.users));

        setIsUsersFetching(false);
    } catch (error) {
        let errorMessage: string;
        if (axios.isAxiosError(error)) {
            errorMessage = error.response
                ? error.response.data.message
                : error.message;

        } else {
            //@ts-ignore
            errorMessage = error.message;
        }

        console.log(errorMessage);
        setIsUsersFetching(false);
        return Promise.reject(errorMessage);
    }
};

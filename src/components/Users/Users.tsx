import React from 'react';
import {useSelector} from 'react-redux';
import s from './Users.module.css';
import {getIsUsersFetching, getUsers} from "../../bll/users.selector";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {User} from "./User/User";
import {getUsersTC} from "../../bll/users.reducer";

export const Users = () => {

    const isUsersFetching = useSelector(getIsUsersFetching);
    const users = useSelector(getUsers);
    const dispatch = useAppDispatch();

    const fetchUsersHandler = () => {
        dispatch(getUsersTC());
    };

    const usersToRender = users.map(user => <User key={user.id} {...user}/>);

    return (
        <div className={s.usersWrapper}>
            <div className={s.buttonWrapper}>
                <button disabled={isUsersFetching} onClick={fetchUsersHandler}>Fetch users</button>
            </div>
            {usersToRender}
        </div>
    );
};

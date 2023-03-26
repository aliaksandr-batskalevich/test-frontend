import React, {FC} from 'react';
import s from './User.module.css';
import {IUser} from "../../../models/IUser";

type UserPropsType = IUser;

export const User: FC<UserPropsType> = ({id, username,isActivated}) => {
    return (
        <div className={s.userWrapper}>
            <div>{id}</div>
            <div>{username}</div>
            <div>{isActivated}</div>
        </div>
    );
};

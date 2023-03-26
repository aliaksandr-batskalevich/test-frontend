import {IUser} from "./IUser";

export interface UsersResponse {
    message: string
    data: {
        totalCount: number
        users: Array<IUser>
    }
}
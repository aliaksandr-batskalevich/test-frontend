import {instance} from "./instace";
import {UsersResponse} from "../models/Users.response";

class UsersApi {
    async getUsers(): Promise<UsersResponse> {
        return instance.get<UsersResponse>('/test')
            .then(response => response.data);
    }
}

export default new UsersApi();
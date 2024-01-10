import { User } from '../shared/models'


export default class UserService{
    async getAll(){
        const users = await User.find();

        return users;
    }
}
import { Types, Model, Schema, model } from 'mongoose';
import { IQuestion, Question } from '../models';
import { ISubject, Subject } from '../models';
import { IUserState, UserState } from '../models';

// Create interface representing a document
export interface IUser {
    _id?: string;
    name: string;
    username: string;
    password: string;
    email: string;
    dp?: string;
    userState?: IUserState;
}

// Put all instance methods in this interface
export interface IUserMethods {}

// Put all static methods in this interface
interface UserModel extends Model<IUser, {}, IUserMethods> {}

// Create Schema corresponding to the document interface
const userSchema = new Schema<IUser, IUserMethods, UserModel>(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        dp: {
            type: String,
        },
        userState: {
            type: String,
            ref: 'UserState',
        },
    },
    {
        collection: 'User',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const User = model<IUser, IUserMethods>('User', userSchema);

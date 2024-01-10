import { Types, Model, Schema, model } from 'mongoose';
import { IQuestion, Question } from '../models';
import { ISubject, Subject } from '../models';
import { IUser, User } from '../models';
import { ITest, Test } from '../models';
import { ITestDetails, TestDetails } from '../models';

// Create interface representing a document
export interface IUserState {
    _id?: string;
    subject: string | ISubject;
    user: string | IUser;
    testDetails: string[] | ITestDetails[];
}

// Put all instance methods in this interface
export interface IUserStateMethods {}

// Put all static methods in this interface
interface UserStateModel extends Model<IUserState, {}, IUserStateMethods> {}

// Create Schema corresponding to the document interface
const userStateSchema = new Schema<IUserState, IUserStateMethods, UserStateModel>(
    {
        _id: {
            type: String,
        },
        subject: {
            type: String,
            required: true,
            ref: 'Subject',
        },
        user: {
            type: String,
            required: true,
            ref: 'User',
        },
        testDetails: {
            type: [
                {
                    type: String,
                    ref: 'TestDetails',
                },
            ],
            default: [],
        },
    },
    {
        collection: 'UserState',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const UserState = model<IUserState, UserStateModel>('UserState', userStateSchema);

import { Types, Model, Schema, model } from 'mongoose';
import { IQuestion, Question } from '../models';
import { IUser, User } from '../models';
import { ITest, Test } from '../models';
import { IQuestionDetails, QuestionDetails } from '../models';

// Create interface representing a document
export interface ITestDetails {
    _id?: string;
    test: string | ITest;
    attempted: boolean;
    correct: boolean;
    questionDetails: string[] | IQuestionDetails[];
}

// Put all instance methods in this interface
export interface ITestDetailsMethods {}

// Put all static methods in this interface
interface TestDetailsModel extends Model<ITestDetails, {}, ITestDetailsMethods> {}

// Create Schema corresponding to the document interface
const testDetailsSchema = new Schema<ITestDetails, ITestDetailsMethods, TestDetailsModel>(
    {
        _id: {
            type: String,
        },
        test: {
            type: String,
            required: true,
            ref: 'Test',
        },
        attempted: {
            type: Boolean,
            required: true,
        },
        correct: {
            type: Boolean,
            required: true,
        },
        questionDetails: {
            type: [
                {
                    type: String,
                    ref: 'QuestionDetails',
                },
            ],
            default: [],
        },
    },
    {
        collection: 'TestDetails',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const TestDetails = model<ITestDetails, TestDetailsModel>('TestDetails', testDetailsSchema);

import { Types, Model, Schema, model } from 'mongoose';
import { IQuestion, Question } from '../models';
import { ISubject, Subject } from '../models';

// Create interface representing a document
export interface ITest {
    _id?: string;
    questions: string[] | IQuestion[];
    subject: string | ISubject;
}

// Put all instance methods in this interface
export interface ITestMethods {}

// Put all static methods in this interface
interface TestModel extends Model<ITest, {}, ITestMethods> {}

// Create Schema corresponding to the document interface
const testSchema = new Schema<ITest, ITestMethods, TestModel>(
    {
        _id: {
            type: String,
        },
        questions: {
            type: [
                {
                    type: String,
                    ref: 'Question',
                },
            ],
            default: [],
        },
        subject: {
            type: String,
            required: true,
            ref: 'Subject',
        },
    },
    {
        collection: 'Test',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const Test = model<ITest, ITestMethods>('Test', testSchema);

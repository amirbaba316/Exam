import { Types, Model, Schema, model } from 'mongoose';
import { ISubject, Subject } from '../models';

// Create interface representing a document
export interface IQuestion {
    _id?: string;
    text: string;
    options: { [x: string]: boolean };
}

// Put all instance methods in this interface
export interface IQuestionMethods {}

// Put all static methods in this interface
interface QuestionModel extends Model<IQuestion, {}, IQuestionMethods> {}

// Create Schema corresponding to the document interface
const questionSchema = new Schema<IQuestion, IQuestionMethods, QuestionModel>(
    {
        _id: {
            type: String,
        },
        text: {
            type: String,
            required: true,
        },
        options: {
            type: Schema.Types.Mixed,
            required: true,
        },
    },
    {
        collection: 'Question',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const Question = model<IQuestion, QuestionModel>('Question', questionSchema);

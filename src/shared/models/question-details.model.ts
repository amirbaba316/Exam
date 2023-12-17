import { Types, Model, Schema, model } from 'mongoose';
import { IQuestion, Question } from '../models';
import { IUser, User } from '../models';
import { ITest, Test } from '../models';
import { OptionsEnum } from '../enums';

// Create interface representing a document
export interface IQuestionDetails {
    _id?: string;
    question: string | IQuestion;
    attempted: boolean;
    correct: boolean;
    optionSelected: OptionsEnum;
}

// Put all instance methods in this interface
export interface IQuestionDetailsMethods {}

// Put all static methods in this interface
interface QuestionDetailsModel extends Model<IQuestionDetails, {}, IQuestionDetailsMethods> {}

// Create Schema corresponding to the document interface
const questionDetailsSchema = new Schema<IQuestionDetails, IQuestionDetailsMethods, QuestionDetailsModel>(
    {
        _id: {
            type: String,
        },
        question: {
            type: String,
            required: true,
            ref: 'Question',
        },
        attempted: {
            type: Boolean,
            required: true,
        },
        correct: {
            type: Boolean,
            required: true,
        },
        optionSelected: {
            type: String,
            enum: Object.values(OptionsEnum),
            required: true,
        },
    },
    {
        collection: 'QuestionDetails',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const QuestionDetails = model<IQuestionDetails, IQuestionDetailsMethods>(
    'QuestionDetails',
    questionDetailsSchema
);

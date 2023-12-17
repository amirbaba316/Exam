import { Types, Model, Schema, model } from 'mongoose';

// Create interface representing a document
export interface ISubject {
    _id?: string;
    name: string;
}

// Put all instance methods in this interface
export interface ISubjectMethods {}

// Put all static methods in this interface
interface SubjectModel extends Model<ISubject, {}, ISubjectMethods> {}

// Create Schema corresponding to the document interface
const subjectSchema = new Schema<ISubject, ISubjectMethods, SubjectModel>(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'Subject',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const Subject = model<ISubject, SubjectModel>('Subject', subjectSchema);

import { Types, Model, Schema, model } from 'mongoose';

// Create interface representing a document
export interface IDocument {
    filePath: string;
    tags: string[];
}

// Put all instance methods in this interface
export interface IDocumentMethods {}

// Put all static methods in this interface
interface DocumentModel extends Model<IDocument, {}, IDocumentMethods> {}

// Create Schema corresponding to the document interface
const documentSchema = new Schema<IDocument, IDocumentMethods, DocumentModel>(
    {
        filePath: {
            type: String,
            required: true,
        },
        tags: {
            type: [
                {
                    type: String,
                },
            ],
            default: [],
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// Create interface representing a document
export interface ISyllabus {
    _id?: string;
    examName: string;
    document: IDocument;
}

// Put all instance methods in this interface
export interface ISyllabusMethods {}

// Put all static methods in this interface
interface SyllabusModel extends Model<ISyllabus, {}, ISyllabusMethods> {}

// Create Schema corresponding to the document interface
const syllabusSchema = new Schema<ISyllabus, ISyllabusMethods, SyllabusModel>(
    {
        _id: {
            type: String,
        },
        examName: {
            type: String,
            required: true,
        },
        document: { type: documentSchema, required: true },
    },
    {
        collection: 'Syllabus',
        versionKey: false,
        timestamps: true,
    }
);

// Create a Model
export const Syllabus = model<ISyllabus, ISyllabusMethods>('Syllabus', syllabusSchema);

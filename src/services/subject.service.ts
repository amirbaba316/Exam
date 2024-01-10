import { Subject } from '../shared/models'


export default class SubjectService{
    async getAll(){
        const subjects = await Subject.find();

        return subjects;
    }
}
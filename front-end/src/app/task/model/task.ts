export interface Task {
    id:number,
    name:string,
    description:string
    notes:string,
    completed:boolean,
    createdAt: Date,
    updatedAt:Date,
    deadline:Date,
    id_project :number

}

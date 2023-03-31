
import { User } from './entities/User'
import { Project } from './entities/Project'
import { Task } from './entities/Task'
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "db",
    database: "todoappweb",
    synchronize: true,
    logging: true,
    entities: [User,Project,Task],
    subscribers: [],
    migrations: [],
})

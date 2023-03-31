"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const User_1 = require("./entities/User");
const Project_1 = require("./entities/Project");
const Task_1 = require("./entities/Task");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "db",
    database: "todoappweb",
    synchronize: true,
    logging: true,
    entities: [User_1.User, Project_1.Project, Task_1.Task],
    subscribers: [],
    migrations: [],
});

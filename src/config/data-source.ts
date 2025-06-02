import { DataSource } from "typeorm";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "your_db_username",
    password: "your_db_password",
    database: "your_db_name",
    entities: [User],
    synchronize: true, // Don't use in production
});

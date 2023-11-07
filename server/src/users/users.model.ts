import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    id: string;
    email: string;
    login: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreation> {
    @Column({type: DataType.STRING, unique: true, primaryKey: true})
    id: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}
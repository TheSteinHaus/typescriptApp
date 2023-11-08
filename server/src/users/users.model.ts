import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreation {
    email: string;
    login: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreation> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}
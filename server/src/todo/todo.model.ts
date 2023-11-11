import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TodoCreation {
    id: string;
    title: string;
    body: string;
    isCompleted: boolean;
    subCards: [];
}

@Table({tableName: 'todo'})
export class Todo extends Model<Todo, TodoCreation> {
    @Column({type: DataType.UUID, unique: true, primaryKey: true})
    id: string;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING})
    body: string;

    @Column({type: DataType.BOOLEAN})
    isCompleted: boolean;

    @Column({type: DataType.ARRAY(DataType.JSON)})
    subCards: [];
}
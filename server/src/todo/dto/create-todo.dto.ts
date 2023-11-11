export class CreateTodoDto {
    readonly id: string;
    readonly title: string;
    readonly body: string;
    readonly isCompleted: boolean;
    readonly subCards: [];
}
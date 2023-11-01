export type Cards = {
    id: string;
    title: string;
    body: string;
    isCompleted: boolean;
    subCards: Cards[];
};
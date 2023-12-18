import {History} from "../../Domain/TicTac/Model";

export interface HistoryDataSourceInterface {
    setHistory(history: History): Promise<void>;

    getHistory(): Promise<History>;

    setStepNumber(stepNumber: number): Promise<void>;

    getStepNumber(): Promise<number>;
}

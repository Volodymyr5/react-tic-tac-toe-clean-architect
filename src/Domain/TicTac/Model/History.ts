import {Board} from "./Board";

type HistoryStep = {
    board: Board;
};

export type History = HistoryStep[];

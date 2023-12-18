import React from "react";
import {Repository} from "./Data/Repository";
import {TicTacToeView} from "./Presenter";
import {OnMemoryHistoryDataSource} from "./Data/DataSource";

const dataSource = new OnMemoryHistoryDataSource();
const repository = new Repository(dataSource);

export function App() {
    return <TicTacToeView repository={repository}/>;
}

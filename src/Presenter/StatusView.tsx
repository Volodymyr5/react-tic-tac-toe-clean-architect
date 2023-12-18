import React from "react";
import {Square} from "../Domain/TicTac/Model";

type StatusViewProps = {
    winner: Square;
    xIsNext: boolean;
};

export const StatusView = ({winner, xIsNext}: StatusViewProps) => {
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return <div>{status}</div>;
}

import React from "react";
import {Board} from "../Domain/TicTac/Model";
import {SquareView} from "./SquareView";

type BoardViewProps = {
    board: Board | null;
    onClick: (indexOnBoard: number) => void;
};

const renderSquare = (props: BoardViewProps, indexOnBoard: number) => {
    return (
        <SquareView
            value={props.board ? props.board[indexOnBoard] : null}
            onClick={() => props.onClick(indexOnBoard)}
        />
    );
}


export const BoardView = (props: BoardViewProps) => {
    return (
        <div>
            <div className="board-row">
                {renderSquare(props, 0)}
                {renderSquare(props, 1)}
                {renderSquare(props, 2)}
            </div>
            <div className="board-row">
                {renderSquare(props, 3)}
                {renderSquare(props, 4)}
                {renderSquare(props, 5)}
            </div>
            <div className="board-row">
                {renderSquare(props, 6)}
                {renderSquare(props, 7)}
                {renderSquare(props, 8)}
            </div>
        </div>
    );
}

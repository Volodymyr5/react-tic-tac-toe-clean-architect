import React from "react";
import {Square} from "../Domain/TicTac/Model";

type SquareViewProps = {
    value: Square;
    onClick: () => void;
};

export const SquareView = ({value, onClick}: SquareViewProps) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

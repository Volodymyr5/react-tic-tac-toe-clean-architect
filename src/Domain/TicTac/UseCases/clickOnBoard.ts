import {RepositoryInterface} from "../Repository";
import {calculateWinnerOnBoard} from "./calculateWinnerOnBoard";
import {isNextTurnX} from "./isNextTurnX";

export async function clickOnBoard(
    indexOnBoard: number,
    repository: RepositoryInterface
) {
    const {board, stepNumber} = await repository.getCurrentStep();
    const newBoard = board.slice();
    if (calculateWinnerOnBoard(newBoard) || newBoard[indexOnBoard]) {
        return;
    }
    newBoard[indexOnBoard] = isNextTurnX(stepNumber) ? "X" : "O";
    await repository.deleteStepsAfterCurrentStepNumber();
    await repository.addStep(newBoard);
    await repository.setCurrentStepNumber(stepNumber + 1);
}

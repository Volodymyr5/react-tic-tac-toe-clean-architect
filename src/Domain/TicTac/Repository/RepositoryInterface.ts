import {Board, Step} from "../Model";

export interface RepositoryInterface {
    getCurrentStep(): Promise<Step>;

    setCurrentStepNumber(stepNumber: number): Promise<void>;

    deleteStepsAfterCurrentStepNumber(): Promise<void>;

    addStep(board: Board): Promise<void>;
}

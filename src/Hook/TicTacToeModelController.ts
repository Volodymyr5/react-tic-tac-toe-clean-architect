import {useEffect, useState} from "react";
import {RepositoryInterface} from "../Domain/TicTac/Repository";
import {Step} from "../Domain/TicTac/Model";
import {clickOnBoard, jumpToStep} from "../Domain/TicTac/UseCases";

export function useTicTacToeModelController(repository: RepositoryInterface) {
    const [currentStep, setCurrentStep] = useState<Step | null>(null);

    useEffect(() => {
        async function init() {
            const initialStep = await repository.getCurrentStep();
            setCurrentStep(initialStep);
        }

        init();
    }, []);

    const handleClickOnBoard = async (indexOnBoard: number) => {
        await clickOnBoard(indexOnBoard, repository);
        const newStep = await repository.getCurrentStep();
        setCurrentStep(newStep);
    };

    const handleJumpToStep = async (stepNumber: number) => {
        await jumpToStep(stepNumber, repository);
        const newStep = await repository.getCurrentStep();
        setCurrentStep(newStep);
    };

    return {
        currentStep,
        handleClickOnBoard,
        handleJumpToStep,
    };
}

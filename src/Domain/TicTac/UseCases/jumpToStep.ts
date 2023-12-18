import {RepositoryInterface} from "../Repository";

export async function jumpToStep(
    stepNumber: number,
    repository: RepositoryInterface
): Promise<void> {
    return repository.setCurrentStepNumber(stepNumber);
}

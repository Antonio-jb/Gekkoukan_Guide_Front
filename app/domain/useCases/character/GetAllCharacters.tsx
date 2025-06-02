import { CharacterRepositoryImpl } from "../../../data/repositories/CharacterRepository";

const repository = new CharacterRepositoryImpl();

export const GetAllCharactersUseCase = async () => {
    return await repository.get_All_Characters();
};


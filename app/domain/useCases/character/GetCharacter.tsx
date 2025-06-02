import { CharacterRepositoryImpl } from "../../../data/repositories/CharacterRepository";

const repository = new CharacterRepositoryImpl();

export const GetCharacterUseCase = async (id: number) => {
    return await repository.get_Character(id);
};

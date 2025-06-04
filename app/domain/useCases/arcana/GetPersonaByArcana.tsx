import { ArcanaRepositoryImpl } from "../../../data/repositories/ArcanaRepository";

const repository = new ArcanaRepositoryImpl();

export const GetPersonaByArcanaUseCase = async (id: number) => {
    return await repository.get_Persona_By_Arcana(id);
};
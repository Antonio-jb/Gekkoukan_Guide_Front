import { ArcanaRepositoryImpl } from "../../../data/repositories/ArcanaRepository";

const repository = new ArcanaRepositoryImpl();

export const GetArcanaUseCase = async (id: number) => {
    return await repository.get_Arcana(id);
};

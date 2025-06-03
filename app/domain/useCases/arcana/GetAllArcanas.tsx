import { ArcanaRepositoryImpl } from "../../../data/repositories/ArcanaRepository";

const repository = new ArcanaRepositoryImpl();

export const GetAllArcanasUseCase = async () => {
    return await repository.get_All_Arcanas();
};


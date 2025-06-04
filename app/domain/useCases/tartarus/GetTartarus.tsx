import {TartarusRepositoryImpl} from "../../../data/repositories/TartarusRepository";
import {TartarusSection} from "../../entities/Tartarus";

const {getTartarus} = new TartarusRepositoryImpl();
const {getDetailTartarus} = new TartarusRepositoryImpl();

export const getTartarusUseCase = async(): Promise<TartarusSection[]> => {
    return await getTartarus();
}

export const getDetailTartarusUseCase = async(id: number): Promise<TartarusSection> => {
    return await getDetailTartarus(id);
}
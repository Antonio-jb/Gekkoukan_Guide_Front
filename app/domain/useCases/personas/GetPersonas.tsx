import {PersonasRepositoryImpl} from "../../../data/repositories/PersonasRepository";
import {PersonasInterface} from "../../entities/Personas";

const {getPersonas} = new PersonasRepositoryImpl();
const {getDetailPersona} = new PersonasRepositoryImpl();

export const getPersonasUseCase = async(): Promise<PersonasInterface[]> => {
    return await getPersonas();
}

export const getDetailPersonaUseCase = async(external_id: number): Promise<PersonasInterface> => {
    return await getDetailPersona(external_id);
}
import {PersonasInterface} from "../entities/Personas";

export interface PersonasRepository{
    getPersonas: () => Promise<PersonasInterface[]>;
    getDetailPersona: (external_id: number) => Promise<PersonasInterface>;
}

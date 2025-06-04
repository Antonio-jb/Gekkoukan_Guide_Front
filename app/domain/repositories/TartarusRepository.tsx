import {TartarusSection} from "../entities/Tartarus";

export interface TartarusRepository{
    getTartarus: () => Promise<TartarusSection[]>;
    getDetailTartarus: (id: number) =>  Promise<TartarusSection>;
}

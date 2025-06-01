import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {PersonasRepository} from "../../domain/repositories/PersonasRepository";
import {PersonasInterface} from "../../domain/entities/Personas";

export class PersonasRepositoryImpl implements PersonasRepository{
    async getPersonas(): Promise<PersonasInterface[]> {
        try{
            const response = await ApiDelivery.get('/personas/');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error respuesta aqui es el fallo: ", e.response?.data);
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getDetailPersona(external_id: number): Promise<PersonasInterface> {
        try{
            const response = await ApiDelivery.get(`/persona/${external_id}/`)
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}
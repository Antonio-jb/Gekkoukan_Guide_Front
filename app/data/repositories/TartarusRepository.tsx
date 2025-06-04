import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {TartarusSection} from "../../domain/entities/Tartarus";
import {TartarusRepository} from "../../domain/repositories/TartarusRepository";

export class TartarusRepositoryImpl implements TartarusRepository{
    async getTartarus(): Promise<TartarusSection[]> {
        try{
            const response = await ApiDelivery.get('/tartarus/');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error respuesta aqui es el fallo: ", e.response?.data);
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getDetailTartarus(id: number): Promise<TartarusSection> {
        try{
            const response = await ApiDelivery.get(`/tartarus/${id}/`)
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}
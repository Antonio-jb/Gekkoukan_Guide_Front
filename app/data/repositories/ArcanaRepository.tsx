import {ArcanaRepository} from "../../domain/repositories/ArcanaRepository";
import { ArcanaInterface } from "../../domain/entities/Arcanas";
import { AxiosError } from "axios";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

export class ArcanaRepositoryImpl implements ArcanaRepository {

    async get_All_Arcanas(): Promise<ArcanaInterface[]> {
        try {
            const response = await ApiDelivery.get('/arcanas/');
            return Promise.resolve(response.data.data);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error fetching all arcanas: ", e.response?.data);
            throw new Error((e.response?.data as { message?: string })?.message || "Failed to fetch arcanas.");
        }
    }

    async get_Arcana(id: number): Promise<ArcanaInterface> {
        try {
            const response = await ApiDelivery.get(`/arcanas/${id}/`);
            return response.data;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error fetching arcana: ", e.response?.data);
            throw new Error((e.response?.data as { message?: string })?.message || "Failed to fetch arcana.");
        }
    }
}

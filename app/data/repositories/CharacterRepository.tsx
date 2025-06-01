import { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import { CharacterInterface } from "../../domain/entities/Characters";
import { AxiosError } from "axios";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

export class CharacterRepositoryImpl implements CharacterRepository {

    async get_All_Characters(): Promise<CharacterInterface[]> {
        try {
            const response = await ApiDelivery.get('/characters/');
            return Promise.resolve(response.data.data);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error fetching all characters: ", e.response?.data);
            throw new Error((e.response?.data as { message?: string })?.message || "Failed to fetch characters.");
        }
    }

    async get_Character(id: number): Promise<CharacterInterface> {
        try {
            const response = await ApiDelivery.get(`/characters/${id}/`);
            return response.data;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error fetching character: ", e.response?.data);
            throw new Error((e.response?.data as { message?: string })?.message || "Failed to fetch character.");
        }
    }
}

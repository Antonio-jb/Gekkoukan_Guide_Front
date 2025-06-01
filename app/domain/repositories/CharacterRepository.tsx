import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {CharacterInterface} from "../entities/Characters";

export interface CharacterRepository {
    get_All_Characters(): Promise<CharacterInterface[]>;
    get_Character(id: number): Promise<CharacterInterface>;
}
import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {ArcanaInterface} from "../entities/Arcanas";

export interface ArcanaRepository {
    get_All_Arcanas(): Promise<ArcanaInterface[]>;
    get_Arcana(id: number): Promise<ArcanaInterface>;
}
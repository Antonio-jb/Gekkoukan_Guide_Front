import {PersonasInterface} from "./Personas";

export interface ArcanaInterface {
    id: number;
    name: string;
    image: any;
    description: string;
    slug?: string;
    personas?: PersonasInterface[];
}
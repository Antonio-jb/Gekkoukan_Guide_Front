import {ArcanaInterface} from "./Arcanas";

export interface RankOption {
    id: number;
    text: string;
    slug: string;
}

export interface Rank {
    id: number;
    level: number;
    slug: string;
    opciones: RankOption[];
}

export interface SocialLinkInterface {
    id: number;
    name: string;
    description: string;
    image: any;
    image_body: any | null;
    arcana: ArcanaInterface[];
    slug: string;
    ranks: Rank[];
}

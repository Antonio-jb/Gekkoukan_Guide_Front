import {ArcanasInterface} from "./Arcanas";

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
    image: string;
    image_body: string | null;
    arcana: ArcanasInterface[];
    slug: string;
    ranks: Rank[];
}

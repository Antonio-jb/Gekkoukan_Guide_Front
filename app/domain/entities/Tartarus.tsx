export interface TartarusInterface {
    id: number;
    name: string;
    slug: string;
}

export interface TartarusSection {
    id: number;
    name: string;
    sections: {
        id: number;
        floor_start: number | null;
        floor_end: number | null;
        personas: string[];
    }[];
}


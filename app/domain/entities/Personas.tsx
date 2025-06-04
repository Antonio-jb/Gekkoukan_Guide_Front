export interface PersonasInterface{
    id: number;
    external_id: number;
    name: string;
    arcana: string;
    arcanaRel?: any;
    level: number;
    description: string;
    image: string;
    strength: number;
    endurance: number;
    agility: number;
    magic:number;
    luck: number;
    weak: string[];
    resists: string[];
    reflects: string[];
    absorbs: string[];
    nullifies: string[];
}

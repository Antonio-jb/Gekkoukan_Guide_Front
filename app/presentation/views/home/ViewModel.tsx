import { useEffect, useState } from "react";
import { CharacterInterface } from "../../../domain/entities/Characters";
import { GetAllCharactersUseCase } from "../../../domain/useCases/character/GetAllCharacters";

export const useCharacterViewModel = () => {
    const [characters, setCharacters] = useState<CharacterInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getCharacters = async () => {
        try {
            const data = await GetAllCharactersUseCase();
            setCharacters(data);
        } catch (err) {
            console.error("Error fetching characters", err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getCharacters();
            setLoading(false);
        };

        fetchData();
    },[]);

    return {
        characters,
        getCharacters
    };
};

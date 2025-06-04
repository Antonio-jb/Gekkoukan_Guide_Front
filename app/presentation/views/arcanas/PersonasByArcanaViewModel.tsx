import { useEffect, useState } from "react";
import { PersonasInterface } from "../../../domain/entities/Personas";
import { GetPersonaByArcanaUseCase } from "../../../domain/useCases/arcana/GetPersonaByArcana";


export const PersonasByArcanaViewModel = (arcanaId: number) => {
    const [personas, setPersonas] = useState<PersonasInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getPersonasByArcana = async () => {
        try {
            const data = await GetPersonaByArcanaUseCase(arcanaId);
            setPersonas(data ?? []);
        } catch (err) {
            console.error("Error fetching personas by arcana:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPersonasByArcana();
    }, [arcanaId]);

    return {
        personas,
        loading,
    };
};

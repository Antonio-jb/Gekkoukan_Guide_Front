import React, {useState} from "react";
import {PersonasInterface} from "../../../domain/entities/Personas";
import {getDetailPersonaUseCase} from "../../../domain/useCases/personas/GetPersonas";

export const DetailPersonaViewModel = () => {
    const [persona, setPersona] = useState<PersonasInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getDetailPersona = async (external_id: number) => {
        setLoading(true);
        try {
            const response = await getDetailPersonaUseCase(external_id);
            setPersona(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        persona,
        loading,
        getDetailPersona,
    };
}
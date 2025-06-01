import {useState} from "react";
import {PersonasInterface} from "../../../domain/entities/Personas";
import {getPersonasUseCase} from "../../../domain/useCases/personas/GetPersonas";

export const PersonasViewModel = () => {
    const [personas, setPersonas] = useState<PersonasInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getPersonas = async () => {
        setLoading(true);
        try{
            const response = await getPersonasUseCase();
            setPersonas(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error)
        } finally {
            setLoading(false);
        }
    }

    return{
        personas,
        getPersonas,
        loading
    }
}
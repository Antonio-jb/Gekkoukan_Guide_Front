import { useEffect, useState } from "react";
import {ArcanaInterface} from "../../../domain/entities/Arcanas";
import { GetAllArcanasUseCase } from "../../../domain/useCases/arcana/GetAllArcanas";

export const ArcanaViewModel = () => {
    const [arcanas, setArcanas] = useState<ArcanaInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getArcanas = async () => {
        try {
            const data = await GetAllArcanasUseCase();
            setArcanas(data);
        } catch (err) {
            console.error("Error fetching arcanas", err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getArcanas();
            setLoading(false);
        };

        fetchData();
    },[]);

    return {
        arcanas,
        getArcanas
    };
};

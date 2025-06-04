import {useState} from "react";
import {TartarusSection} from "../../../domain/entities/Tartarus";
import {getDetailTartarusUseCase, getTartarusUseCase} from "../../../domain/useCases/tartarus/GetTartarus";

export const TartarusViewModel = () => {
    const [tartarus, setTartarus] = useState<TartarusSection[]>([]);
    const [tartarusDetail, setTartarusDetail] = useState<TartarusSection | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getTartarus = async () => {
        setLoading(true);
        try{
            const response = await getTartarusUseCase();
            setTartarus(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error)
        } finally {
            setLoading(false);
        }
    }

    const getDetailTartarus = async (id: number) => {
        setLoading(true);
        try{
            const response = await getDetailTartarusUseCase(id);
            setTartarusDetail(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error)
        } finally {
            setLoading(false);
        }
    }

    return{
        tartarus,
        tartarusDetail,
        getTartarus,
        getDetailTartarus,
        loading
    }
}
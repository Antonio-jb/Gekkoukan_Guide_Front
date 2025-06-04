import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {SocialLinksRepository} from "../../domain/repositories/SocialLinksRepository";
import {SocialLinkInterface} from "../../domain/entities/SocialLink";

export class SocialLinksRepositoryImpl implements SocialLinksRepository{
    async getSocialLinks(): Promise<SocialLinkInterface[]> {
        try{
            const response = await ApiDelivery.get('/social-link/');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error respuesta aqui es el fallo: ", e.response?.data);
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getDetailSocialLink(id: number): Promise<SocialLinkInterface> {
        try{
            const response = await ApiDelivery.get(`/social-link/${id}/`)
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}
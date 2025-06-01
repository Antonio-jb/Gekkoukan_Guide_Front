import {useState} from "react";
import {SocialLinkInterface} from "../../../domain/entities/SocialLink";
import {getDetailSocialLinkUseCase} from "../../../domain/useCases/social-links/GetSocialLinks";

export const DetailSocialLinkViewModel = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLinkInterface | null>(null);

    const getDetailSocialLinks = async (id: number) => {
        try{
            const response = await getDetailSocialLinkUseCase(id);
            setSocialLinks(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error)
        }
    }

    return{
        socialLinks,
        getDetailSocialLinks
    }
}
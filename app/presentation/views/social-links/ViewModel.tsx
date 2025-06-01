import {useState} from "react";
import {SocialLinkInterface} from "../../../domain/entities/SocialLink";
import {getSocialLinksUseCase} from "../../../domain/useCases/social-links/GetSocialLinks";

export const SocialLinkViewModel = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLinkInterface[]>([]);

    const getSocialLinks = async () => {
        try{
            const response = await getSocialLinksUseCase();
            setSocialLinks(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error)
        }
    }

    return{
        socialLinks,
        getSocialLinks
    }
}
import {useState} from "react";
import {SocialLinkInterface} from "../../../domain/entities/SocialLink";
import {getSocialLinksUseCase} from "../../../domain/useCases/social-links/GetSocialLinks";

export const SocialLinkViewModel = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLinkInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getSocialLinks = async () => {
        setLoading(true);
        try{
            const response = await getSocialLinksUseCase();
            setSocialLinks(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error)
        } finally {
            setLoading(false);
        }
    }

    return{
        socialLinks,
        getSocialLinks,
        loading
    }
}
import {useState} from "react";
import {SocialLinkInterface} from "../../../domain/entities/SocialLink";
import {getDetailSocialLinkUseCase} from "../../../domain/useCases/social-links/GetSocialLinks";

export const DetailSocialLinkViewModel = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLinkInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getDetailSocialLinks = async (id: number) => {
        setLoading(true);
        try {
            const response = await getDetailSocialLinkUseCase(id);
            setSocialLinks(response);
        } catch (error) {
            console.error("Error mostrando los social links: ", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        socialLinks,
        loading,
        getDetailSocialLinks,
    };
}
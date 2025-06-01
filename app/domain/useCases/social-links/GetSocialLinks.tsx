import {SocialLinksRepositoryImpl} from "../../../data/repositories/SocialLinksRepository";
import {SocialLinkInterface} from "../../entities/SocialLink";

const {getSocialLinks} = new SocialLinksRepositoryImpl();
const {getDetailSocialLink} = new SocialLinksRepositoryImpl();

export const getSocialLinksUseCase = async(): Promise<SocialLinkInterface[]> => {
    return await getSocialLinks();
}

export const getDetailSocialLinkUseCase = async(id: number): Promise<SocialLinkInterface> => {
    return await getDetailSocialLink(id);
}
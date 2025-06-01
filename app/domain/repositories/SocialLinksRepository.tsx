import {SocialLinkInterface} from "../entities/SocialLink";

export interface SocialLinksRepository{
    getSocialLinks: () => Promise<SocialLinkInterface[]>;
    getDetailSocialLink: (id: number) =>  Promise<SocialLinkInterface>;
}

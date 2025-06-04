import {SocialLinkInterface} from "../../../domain/entities/SocialLink";
import {CardSocialLink} from "../../components/social-link/CardSocialLink";
import {TouchableOpacity} from "react-native";
import React from "react";

interface Props{
    item: SocialLinkInterface;
    navigation: any;
}

export const RenderSocialLinks = ({item, navigation}: Props) => {
    return(
        <TouchableOpacity onPress={() => {navigation.navigate("DetailSocialLink", { id: item.id })}}>
            <CardSocialLink
                name={item.name}
                arcana={item.arcana}
                imageSocialLink={{ uri: `http://192.168.1.173:8000/${item.image}` }}>
            </CardSocialLink>
        </TouchableOpacity>
    )
}
import React from "react";
import {TouchableOpacity} from "react-native";
import {PersonasInterface} from "../../../domain/entities/Personas";
import {CardPersona} from "../../components/persona/CardPersona";

interface Props{
    item: PersonasInterface;
    navigation: any;
}

export const RenderPersonas = ({item, navigation}: Props) => {
    return(
        <TouchableOpacity onPress={() => {navigation.navigate("DetailPersona", { external_id: item.external_id })}}>
            <CardPersona
                name={item.name}
                arcana={item.arcana}
                imagePersona={{uri: item.image }}/>
        </TouchableOpacity>
    )
}
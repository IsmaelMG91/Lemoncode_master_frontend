import React from "react";
import { Link } from "react-router-dom";
import * as vm from "@/pods/list/rickAndMortyList/rickMortyList.vm";
import { routes } from "@/router";

interface Props {
    data: vm.Character;
}

export const Character: React.FC<Props> = (props) => {
    const { data } = props;
    
    return (
        <>
            <img src={data.image}/>
            <span>{data.id}</span>
            <Link to={routes.detail(data.name)}>{data.name}</Link>
        </>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import * as vm from "./rickMortyDetail.vm";

interface Props {
    character: vm.CharacterDetail,
}

export const CharacterDetail : React.FC<Props> = (props) => {
    const { character } = props;

    return (
        <>
            <h2>Detail Page</h2>
            <h3>User Id: {character?.id}</h3>
            <img className="detail-img" src={character?.image}/>
            <p> id : {character?.id}</p>
            <p> name : {character?.name}</p>
            <p> gender : {character?.gender}</p>
            <p> species : {character?.species}</p>
            <p> status : {character?.status}</p>
            <p> type : {character?.type}</p>
            <p> origin : {character?.origin.name}</p>
            <p> Location : {character?.location.name}</p>
            <Link to={routes.rickMortyList}>Back to list page</Link>
        </>
    )
}
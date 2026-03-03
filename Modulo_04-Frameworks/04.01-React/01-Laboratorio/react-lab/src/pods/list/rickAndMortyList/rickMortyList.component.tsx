import React from "react";
import * as vm from "./rickMortyList.vm";
import { TableHeader } from "../components";
import { Character } from "./components";


interface Props {
    characters: vm.Character[];
}

export const RickAndMortyList: React.FC<Props> = (props) => {
    const { characters } = props;
    return (
    <>
        <div className="list-user-list-container">
            <TableHeader/>
            {characters.map((character) => (
                    <Character key={character.id} data={character}></Character>
                ))}
        </div>
    </>
    )
}
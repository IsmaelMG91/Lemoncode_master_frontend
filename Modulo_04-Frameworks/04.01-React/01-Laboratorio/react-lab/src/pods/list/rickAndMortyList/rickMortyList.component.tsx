import React from "react";
import * as vm from "./rickMortyList.vm";
import { ShowLessButton, ShowMoreButton, TableHeader } from "../components";
import { Character } from "./components/character.component";


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
        <div>
            <ShowMoreButton/>
            <ShowLessButton/>
        </div>
    </>
    )
}
import React from "react";
import { getRickAndMortyCharacters } from "../api/api";
import type { Character } from "./rickMortyList.vm";
import { mapCharactersToVM } from "./rickMortyList.mappers";
import { RickAndMortyList } from "./rickMortyList.component";

export const RickAndMortyListPod : React.FC = () => {
    const [characters, setCharacters] = React.useState<Character[]>([]);

    React.useEffect(() => {
        getRickAndMortyCharacters()
        .then(mapCharactersToVM)
        .then(setCharacters)
    }, []);

    return (
            <RickAndMortyList characters={characters}></RickAndMortyList>
    )
}
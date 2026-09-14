import React from "react";
import { getRickAndMortyCharacters } from "../api/api";
import type { Character } from "./rickMortyList.vm";
import { mapCharactersToVM } from "./rickMortyList.mappers";
import { RickAndMortyList } from "./rickMortyList.component";
import { PageNameContext, SearchCharacterContext } from "@/context";

export const RickAndMortyListPod: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const char = React.useContext(SearchCharacterContext);

  const pageName = React.useContext(PageNameContext);

  React.useEffect(() => {
    pageName.setPageName("character");
    getRickAndMortyCharacters(char).then(mapCharactersToVM).then(setCharacters);
  }, [char.character]);

  return <RickAndMortyList characters={characters}></RickAndMortyList>;
};

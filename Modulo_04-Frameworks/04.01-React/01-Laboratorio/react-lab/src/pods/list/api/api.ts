import type { Member, RickAndMortyCharacter } from "./api.model";
import type { SearchValueModel, PageModel, SearchCharacterModel } from "@/context";


export const getMembers = async (org:SearchValueModel, page:PageModel): Promise<Member[]> => {

    return fetch(`https://api.github.com/orgs/${org.searchValue}/members?per_page=${page.page}`)
    .then((response) => response.json())
}


// Métodos para api Rick and Morty
export const getRickAndMortyCharacters = async ( char: SearchCharacterModel) : Promise<RickAndMortyCharacter[]> => {

    return (
        fetch(`https://rickandmortyapi.com/api/character/?name=${char.character}`)
        .then((response) => response.json())
        .then((data) => data.results)
    )
}
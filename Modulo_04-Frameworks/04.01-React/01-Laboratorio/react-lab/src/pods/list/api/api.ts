import type { Member, RickAndMortyCharacter } from "./api.model";
import type { OrganizationModel, PageModel } from "@/context";


export const getMembers = async (org:OrganizationModel, page:PageModel): Promise<Member[]> => {

    return fetch(`https://api.github.com/orgs/${org.organization}/members?per_page=${page.page}`)
    .then((response) => response.json())
}

export const getRickAndMortyCharacters = async () : Promise<RickAndMortyCharacter[]> => {
    // const response = await fetch(`https://rickandmortyapi.com/api/character`)
    // const data = await response.json();
    // return data.results;

    return (
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((data) => data.results)
    )
}
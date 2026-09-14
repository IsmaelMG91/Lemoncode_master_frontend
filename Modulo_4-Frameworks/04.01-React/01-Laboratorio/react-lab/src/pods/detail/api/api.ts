
import type { CharacterDetail, MemberDetail } from "./api.model";

export const getMemberDetail = async (id: string): Promise<MemberDetail> => {
    return(
        fetch(`https://api.github.com/users/${id}`)
            .then((response) => response.json())
    )        
}

export const getCharacterDetail = async (id: string): Promise<CharacterDetail> => {
    return (
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
    )
}
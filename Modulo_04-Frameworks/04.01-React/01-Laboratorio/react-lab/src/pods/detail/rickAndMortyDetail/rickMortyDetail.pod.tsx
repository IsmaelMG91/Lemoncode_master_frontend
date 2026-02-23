import React from "react";
import * as vm from "./rickMortyDetail.vm"
import { CharacterDetail } from "./rickMortyDetail.component";
import { getCharacterDetail} from "../api/api";
import { mapCharacterDetailToVM } from "./rickMortyDetail.mappers";

interface Props {
    id: string,
}

export const RickMortyDetailPod : React.FC<Props> = (props) => {
    const { id } = props;
    const [character, setCharacter] = React.useState<vm.CharacterDetail>();
    
    React.useEffect(() => {
        getCharacterDetail(id).then(mapCharacterDetailToVM).then(setCharacter)
    }, [id]);

    return character && <CharacterDetail character={character} />
}
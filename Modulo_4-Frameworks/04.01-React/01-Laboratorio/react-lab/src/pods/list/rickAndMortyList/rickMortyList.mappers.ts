import * as am from "@/pods/list/api/api.model";
import * as vm from "./rickMortyList.vm";

export const mapCharacterToVM = (data:am.RickAndMortyCharacter): vm.Character => ({
    id: data.id,
    name: data.name,
    image: data.image
})

export const mapCharactersToVM = (data: am.RickAndMortyCharacter[]): vm.Character[]=>
     data.map((item) => mapCharacterToVM(item))
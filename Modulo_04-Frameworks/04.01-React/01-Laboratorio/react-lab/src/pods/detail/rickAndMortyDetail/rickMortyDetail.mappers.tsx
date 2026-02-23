import * as am from "../api/api.model";
import * as vm from "./rickMortyDetail.vm";

export const mapCharacterDetailToVM = (data: am.CharacterDetail):vm.CharacterDetail => ({
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    type: data.type,
    gender: data.gender,
    origin: data.origin,
    location: data.location,
    image: data.image
});

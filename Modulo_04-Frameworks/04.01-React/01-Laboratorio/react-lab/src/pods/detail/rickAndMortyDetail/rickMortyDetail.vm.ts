import type { Origin, Location } from "../api/api.model"

export interface CharacterDetail {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
}


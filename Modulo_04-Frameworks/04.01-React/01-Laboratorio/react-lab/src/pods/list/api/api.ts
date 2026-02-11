import type { OrganizationModel } from "@/context";
import type { Member } from "./api.model";


export const getMembers = async (org:OrganizationModel): Promise<Member[]> => {

    return fetch(`https://api.github.com/orgs/${org.organization}/members`)
    .then((response) => response.json())
}
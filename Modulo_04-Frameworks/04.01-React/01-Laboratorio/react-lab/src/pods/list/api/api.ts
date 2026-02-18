import type { Member } from "./api.model";
import type { OrganizationModel, PageModel } from "@/context";


export const getMembers = async (org:OrganizationModel, page:PageModel): Promise<Member[]> => {

    return fetch(`https://api.github.com/orgs/${org.organization}/members?per_page=${page.page}`)
    .then((response) => response.json())
}
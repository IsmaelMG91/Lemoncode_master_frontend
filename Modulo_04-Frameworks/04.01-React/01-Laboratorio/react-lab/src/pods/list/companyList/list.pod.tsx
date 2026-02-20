import React from "react";
import { OrganizationContext, PageContext } from "@/context";
import type { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "../api/api";
import { mapMembersToVM } from "./list.mappers";

export const ListPod : React.FC = () => {
    const [members, setMembers] = React.useState<Member[]>([]);
    const org = React.useContext(OrganizationContext);
    const page = React.useContext(PageContext);

    React.useEffect(() => {
        getMembers(org, page)
        .then(mapMembersToVM)
        .then(setMembers)
    }, [org, page]);

    return (
            <List members={members}></List>
    )
}
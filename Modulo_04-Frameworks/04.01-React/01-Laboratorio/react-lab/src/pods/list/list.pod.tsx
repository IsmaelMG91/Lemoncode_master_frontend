import React from "react";
import { OrganizationContext } from "@/context";
import type { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mappers";

export const ListPod : React.FC = () => {
    const [members, setMembers] = React.useState<Member[]>([]);
    // const [comp, setComp] = React.useState<string>("lemoncode");
    const org = React.useContext(OrganizationContext);

    React.useEffect(() => {
        getMembers(org)
        .then(mapMembersToVM)
        .then(setMembers)
    }, [org.organization]);

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     org.setOrganization(comp);
    // }

    return (//sacar botón e input en componente
        <>
            <List members={members}></List>
        </>
    )
}
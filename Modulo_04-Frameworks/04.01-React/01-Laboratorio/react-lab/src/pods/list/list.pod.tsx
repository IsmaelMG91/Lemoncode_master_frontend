import React from "react";
import { OrganizationContext } from "@/context";
import type { MemberEntity } from "./list.vm";
import { List } from "./list.component";

export const ListPod : React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [comp, setComp] = React.useState<string>("lemoncode");
    const org = React.useContext(OrganizationContext);

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/${org.organization}/members`)
        .then((response) => response.json())
        .then(setMembers)
    }, [org.organization]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        org.setOrganization(comp);
    }

    return (//sacar botón e input en componente
        <>
            <List members={members}></List>
        </>
    )
}
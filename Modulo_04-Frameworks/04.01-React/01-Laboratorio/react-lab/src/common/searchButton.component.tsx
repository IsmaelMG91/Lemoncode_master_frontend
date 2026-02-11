import React, { useContext } from "react";
import { OrganizationContext } from "@/context";

export const SearchButton: React.FC = () => {
    const [comp, setComp] = React.useState<string>("lemoncode");
    const org = useContext(OrganizationContext);

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        org.setOrganization(comp);
        }    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" defaultValue ={org.organization} onChange={(e) => setComp(e.target.value)}/>
            <button type="submit">Buscar</button>
        </form>
    )

}


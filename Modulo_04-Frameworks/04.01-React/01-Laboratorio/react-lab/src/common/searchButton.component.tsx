import React, { useContext } from "react";
import { OrganizationContext } from "@/context/organization.context";

export const SearchButton: React.FC = () => {
    const [company, setCompany] = React.useState<string>("lemoncode");
    const org = useContext(OrganizationContext);

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        org.setOrganization(company);
        }    

    return (
        <form className="search-button" onSubmit={handleSubmit}>
            <input type="text" defaultValue ={org.organization} onChange={(e) => setCompany(e.target.value)}/>
            <button type="submit">Buscar</button>
        </form>
    )

}


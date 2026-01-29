import React from "react";

interface OrganizationModel {
    organization: string;
    setOrganization: (organization: string) => void;
}

export const OrganizationContext = React.createContext<OrganizationModel>({
    organization: "lemoncode",
    setOrganization: () => undefined,
});

export const OrganizationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [organization, setOrganization] = React.useState<string>("lemoncode");
    return <OrganizationContext.Provider value={ {organization, setOrganization} }>{ children }</OrganizationContext.Provider>;
}
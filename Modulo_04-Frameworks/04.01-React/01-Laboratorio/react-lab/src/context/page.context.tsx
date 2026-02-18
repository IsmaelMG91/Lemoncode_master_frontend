import React from "react";

export interface PageModel {
    page: number;
    setPage: (page: number) => void;
}

export const PageContext = React.createContext<PageModel>({
    page: 5,
    setPage: () => undefined,
});

export const PageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [page, setPage] = React.useState<number>(5);
    return <PageContext.Provider value={ {page, setPage} }>{ children }</PageContext.Provider>;
}
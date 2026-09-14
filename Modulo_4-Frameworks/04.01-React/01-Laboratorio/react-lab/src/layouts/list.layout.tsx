import React, { type PropsWithChildren } from "react";
import { Header } from "./components";
//TO DO: crear componente header dentro de layouts/components
export const ListLayout : React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout-app-container">
            <Header></Header>
            {children}
        </div>
    )
}
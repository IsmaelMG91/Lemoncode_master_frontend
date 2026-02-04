import React, { type PropsWithChildren } from "react";
//TO DO: crear componente header dentro de layouts/components
export const ListLayout : React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout-app-container">
            <div className="layout-app-header">User Logged in</div>
            {children}
        </div>
    )
}
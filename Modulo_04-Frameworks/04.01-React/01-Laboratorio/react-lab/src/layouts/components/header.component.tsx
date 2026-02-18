import React from "react";
import { SearchButton } from "@/common";

export const Header: React.FC = () => {
        return (
            <>
               <div className="layout-app-header">
                <SearchButton/>
                User Logged in
                </div>
            </>
        )
}
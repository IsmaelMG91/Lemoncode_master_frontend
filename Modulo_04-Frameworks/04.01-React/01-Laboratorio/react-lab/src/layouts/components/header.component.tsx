import React from "react";
import { SearchButton } from "@/common";

export const Header: React.FC = () => {
        return (
            <>
               <div className="layout-app-header">
                <SearchButton/>
                <div className="api-options">
                    <span>Company</span>
                    <span>Rick and Morty</span>
                </div>
                User Logged in
                </div>
            </>
        )
}
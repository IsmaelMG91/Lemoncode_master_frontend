import React from "react";
import { SearchButton } from "@/common";
import { Link } from "react-router-dom";
import { routes } from "@/router";

export const Header: React.FC = () => {
        return (
            <>
               <div className="layout-app-header">
                <SearchButton/>
                <div className="api-options">
                    <Link to={routes.list}>Company</Link>
                    <Link to={routes.rickMortyList}>Rick and Morty</Link>
                </div>
                User Logged in
                </div>
            </>
        )
}
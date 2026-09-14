import React from "react";
import { Link } from "react-router-dom";
import { SearchCompanyButton } from "@/pods/list/companyList/components";
import { routes } from "@/router";
import { PageNameContext } from "@/context";
import { SearchCharacterButton } from "@/pods/list/rickAndMortyList/components";

export const Header: React.FC = () => {
  const pageName = React.useContext(PageNameContext);

  // const handleClick = () => {
  //   if (pageName.pageName === "company") {
  //     pageName.setPageName("character");
  //   } else {
  //     pageName.setPageName("company");
  //   }
  // };

  return (
    <>
      <div className="layout-app-header">
        {pageName.pageName === "company" ? (
          <SearchCompanyButton />
        ) : (
          <SearchCharacterButton />
        )}
        <div className="api-options">
          <Link to={routes.list}>Company</Link>
          <Link to={routes.rickMortyList}>Rick and Morty</Link>
        </div>
        User Logged in
      </div>
    </>
  );
};

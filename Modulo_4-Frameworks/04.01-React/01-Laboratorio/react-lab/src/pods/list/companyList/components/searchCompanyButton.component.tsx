import React, { useContext } from "react";
import { SearchValueContext } from "@/context/searchValue.context";

export const SearchCompanyButton: React.FC = () => {
  const [company, setCompany] = React.useState<string>("lemoncode");
  const org = useContext(SearchValueContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    org.setSearchValue(company);
  };

  return (
    <form className="search-button" onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue={org.searchValue}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

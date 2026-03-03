import React from "react";

export interface SearchValueModel {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const SearchValueContext = React.createContext<SearchValueModel>({
  searchValue: "",
  setSearchValue: () => undefined,
});

export const SearchValueProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = React.useState<string>("lemoncode");
  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};

import React from "react";

export interface SearchCharacterModel {
  character: string;
  setCharacter: (character: string) => void;
}

export const SearchCharacterContext = React.createContext<SearchCharacterModel>(
  {
    character: "",
    setCharacter: () => undefined,
  },
);

export const SearchCharacterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [character, setCharacter] = React.useState<string>("");
  return (
    <SearchCharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </SearchCharacterContext.Provider>
  );
};

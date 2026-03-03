import React, { useContext } from "react";
import { SearchCharacterContext } from "@/context";

export const SearchCharacterButton: React.FC = () => {
  const char = useContext(SearchCharacterContext);
  const [character, setCharacter] = React.useState<string>(char.character);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    char.setCharacter(character);
  };

  return (
    <form className="search-button" onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue={char.character}
        onChange={(e) => setCharacter(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

import React, { useContext } from "react";
import { SearchCharacterContext } from "@/context";
import { useDebouncedCallback } from "use-debounce";

export const SearchCharacterButton: React.FC = () => {
  const char = useContext(SearchCharacterContext);
  const charDebounced = useDebouncedCallback((character) => {
    char.setCharacter(character);
  }, 500);

  return (
    <form className="search-button">
      <input
        type="text"
        placeholder="search"
        defaultValue={char.character}
        onChange={(e) => charDebounced(e.target.value)}
      />
    </form>
  );
};

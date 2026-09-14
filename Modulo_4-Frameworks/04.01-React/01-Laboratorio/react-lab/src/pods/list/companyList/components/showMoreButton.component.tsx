import React from "react";
import { PageContext } from "@/context";

export const ShowMoreButton: React.FC = () => {

    const page = React.useContext(PageContext);

        const handleShowMoreButton = () =>{
        const newPage = page.page + 5;
        page.setPage(newPage)
    }

    return (
        <button onClick={handleShowMoreButton}>Mostrar más</button>
    )
}
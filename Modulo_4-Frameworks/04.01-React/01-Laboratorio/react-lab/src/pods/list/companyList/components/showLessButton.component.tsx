import React from "react";
import { PageContext } from "@/context";

export const ShowLessButton: React.FC = () => {

    const page = React.useContext(PageContext);

        const handleShowLessButton = () =>{
            if (page.page > 5) {
                const newPage = page.page - 5;
                page.setPage(newPage)
            }
    }

    return (
        <button onClick={handleShowLessButton}>Mostrar menos</button>
    )
}
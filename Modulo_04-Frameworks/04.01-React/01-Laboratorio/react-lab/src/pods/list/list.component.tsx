import React from "react";
import type { MemberEntity } from "./list.vm";
import { Member } from "./components";


interface Props {
    members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
    const { members } = props;

    return (//sacar botón e input en componente
    <>
        {/* <form onSubmit={handleSubmit}>
            <input type="text" defaultValue ={org.organization} onChange={(e) => setComp(e.target.value)}/>
            <button type="submit">Buscar</button>
        </form> */}
        {/*sacar header de table en un componente TableHeader*/}
        <div className="list-user-list-container">
            <span className="list-header">Avatar</span>
            <span className="list-header">Id</span>
            <span className="list-header">Name</span>
            {members.map((member) => (
                <React.Fragment key={member.id}>
                    <Member data={member}></Member>
                </React.Fragment>
            ))}
        </div>
    </>
    )
}
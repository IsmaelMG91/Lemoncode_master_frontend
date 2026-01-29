import React from "react";
import { generatePath, Link } from "react-router-dom";
import { OrganizationContext } from "./context";

interface MemberEntity {
    id: string,
    login: string,
    avatar_url: string;
}

export const ListPage : React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [comp, setComp] = React.useState<string>("lemoncode");
    //pasar por context
    const org = React.useContext(OrganizationContext);

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/${org.organization}/members`)
        .then((response) => response.json())
        .then(setMembers)
    }, [org.organization]);
    //crear un estado para guardar el input y setear el context al hacer submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        org.setOrganization(comp);
    }

    return (//sacar botón e input en componente
        <>
            <h2>List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value ={comp} onChange={(e) => setComp(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
            <div className="list-user-list-container">
                <span className="list-header">Avatar</span>
                <span className="list-header">Id</span>
                <span className="list-header">Name</span>
                {members.map((member) => (
                    <React.Fragment key={member.id}>
                        <img src={member.avatar_url}/>
                        <span>{member.id}</span>
                        <Link to={generatePath("/detail/:id", {id: member.login})}>{member.login}</Link>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}
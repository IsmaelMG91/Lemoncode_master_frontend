import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "./router";

interface MemberDetailEntity {
    id: string,
    login: string,
    name: string,
    company: string,
    bio: string,
}

export const DetailPage : React.FC = () => {
    const [member, setMember] = React.useState<MemberDetailEntity>();
    const { login } = useParams();

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setMember)
    }, []);

    return (
        <>
            <h2>Detail Page</h2>
            <h3>User Id: {}</h3>
            <p> id : {member?.id}</p>
            <p> login : {member?.login}</p>
            <p> name : {member?.name}</p>
            <p> company : {member?.company}</p>
            <p> bio : {member?.bio}</p>
            <Link to={routes.list}>Back to list page</Link>
        </>
    )
}
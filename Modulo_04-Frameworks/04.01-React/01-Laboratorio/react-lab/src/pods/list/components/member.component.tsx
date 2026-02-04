import React from "react";
import { Link } from "react-router-dom";
import type { MemberEntity } from "../list.vm";
import { routes } from "@/router";

interface Props {
    data: MemberEntity;
}

export const Member: React.FC<Props> = (props) => {
    const { data } = props;
    
    return (
        <>
            <img src={data.avatar_url}/>
            <span>{data.id}</span>
            <Link to={routes.detail(data.login)}>{data.login}</Link>
        </>
    )
}
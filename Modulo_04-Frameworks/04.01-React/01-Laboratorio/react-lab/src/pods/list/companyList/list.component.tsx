import React from "react";
import * as vm from "./list.vm";
import { Member, ShowLessButton, ShowMoreButton, TableHeader } from "../components";


interface Props {
    members: vm.Member[];
}

export const List: React.FC<Props> = (props) => {
    const { members } = props;

    return (
    <>
        <div className="list-user-list-container">
            <TableHeader/>
            {members.map((member) => (
                    <Member key={member.id} data={member}></Member>
                ))}
        </div>
        <div>
            <ShowMoreButton/>
            <ShowLessButton/>
        </div>
    </>
    )
}
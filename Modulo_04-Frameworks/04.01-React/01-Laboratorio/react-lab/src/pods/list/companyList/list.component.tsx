import React from "react";
import * as vm from "./list.vm";
import { TableHeader } from "@/pods/list/components";
import { Member, ShowMoreButton, ShowLessButton } from "./components";


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
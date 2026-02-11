import React from "react";
import * as vm from "./list.vm";
import { Member, TableHeader } from "./components";
import { SearchButton } from "@/common";


interface Props {
    members: vm.Member[];
}

export const List: React.FC<Props> = (props) => {
    const { members } = props;

    return (
    <>
        <SearchButton></SearchButton>
        <div className="list-user-list-container">
            <TableHeader/>
            {members.map((member) => (
                    <Member key={member.id} data={member}></Member>
            ))}
        </div>
    </>
    )
}
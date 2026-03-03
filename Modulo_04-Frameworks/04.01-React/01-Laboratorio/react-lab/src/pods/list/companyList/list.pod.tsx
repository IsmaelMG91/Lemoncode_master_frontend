import React from "react";
import { SearchValueContext, PageContext, PageNameContext } from "@/context";
import type { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "../api/api";
import { mapMembersToVM } from "./list.mappers";

export const ListPod: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const org = React.useContext(SearchValueContext);
  const page = React.useContext(PageContext);
  const pageName = React.useContext(PageNameContext);

  React.useEffect(() => {
    pageName.setPageName("company");
    getMembers(org, page).then(mapMembersToVM).then(setMembers);
  }, [org, page]);

  return <List members={members}></List>;
};

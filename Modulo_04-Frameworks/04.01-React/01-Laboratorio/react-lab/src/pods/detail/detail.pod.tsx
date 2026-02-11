import React from "react";
import * as vm from "./detail.vm"
import { Detail } from "./detail.component";
import { getMemberDetail } from "./api/api";
import { mapMemberDetailToVM } from "./detail.mappers";

interface Props {
    login: string,
}

export const DetailPod : React.FC<Props> = (props) => {
    const { login } = props;
    const [member, setMember] = React.useState<vm.MemberDetail>();
    
    React.useEffect(() => { //revisar clase y componentes de ruter
        getMemberDetail(login).then(mapMemberDetailToVM).then(setMember)
    }, [login]);

    return member && <Detail member={member} />
}
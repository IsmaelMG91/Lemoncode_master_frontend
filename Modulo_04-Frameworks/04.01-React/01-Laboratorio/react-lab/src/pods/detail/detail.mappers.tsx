import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapMemberDetailToVM = (data: am.MemberDetail):vm.MemberDetail => ({
    id: data.id,
    login: data.login,
    bio: data.bio,
    name: data.name,
    company: data.company,
    avatar_url:data.avatar_url,
});

import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    list: string,
    detail: string,
    rickMortyList: string,
    rickMortyDetail: string,
}

interface DetailRouter extends Omit <SwitchRoutes, "detail" | "rickMortyDetail">{
    detail: (login: string) => string,
    characterDetail : (id: number) => string,
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/member-list",
    detail: "/detail/:login",
    rickMortyList: "/rick-morty-list",
    rickMortyDetail: "/rick-morty-list/:id",
}

export const routes: DetailRouter = {
    ...switchRoutes,
    detail: (login: string) => generatePath(switchRoutes.detail, {login}),
    characterDetail: (id: number) => generatePath(switchRoutes.rickMortyDetail, {id})
}
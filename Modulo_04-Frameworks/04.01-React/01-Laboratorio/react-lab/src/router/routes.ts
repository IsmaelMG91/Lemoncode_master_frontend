import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    list: string,
    detail: string,
    rickMortyList: string,
}

interface DetailRouter extends Omit <SwitchRoutes, "detail">{
    detail: (login: string) => string,
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/member-list",
    detail: "/detail/:login",
    rickMortyList: "/rick-morty-list",
}

export const routes: DetailRouter = {
    ...switchRoutes,
    detail: (login: string) => generatePath(switchRoutes.detail, {login}),
}
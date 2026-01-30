import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    list: string,
    detail: string,
}

interface DetailRouter extends Omit <SwitchRoutes, "detail">{
    detail: (login: string) => string,
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list",
    detail: "/detail/:login",
}

export const routes: DetailRouter = {
    ...switchRoutes,
    detail: (login: string) => generatePath(switchRoutes.detail, {login}),
}
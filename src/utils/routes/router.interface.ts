import type { RouteObject } from "react-router-dom";

export type EnhancedRouterObject = RouteObject & {
    title: string;
}

export type RoutesType = EnhancedRouterObject[]

export interface PathsType {
    [title: EnhancedRouterObject['title']]: EnhancedRouterObject['path'];
}

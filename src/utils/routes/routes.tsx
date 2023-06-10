import type { RouteObject } from "react-router-dom";
import { EnhancedRouterObject, PathsType, RoutesType } from "./router.interface";

export const enhancedRoutes: RoutesType = [
    {
        title: 'Home',
        path: '/',
        element: <div>Home</div>,
    },
    {
        title: 'About',
        path: '/about',
        element: <div>About</div>,
    },
    {
        title: 'Work',
        path: '/work',
        element: <div>Work</div>,
    },
    {
        title: 'Contribute',
        path: '/contribute',
        element: <div>Contribute</div>,
    },
    {
        title: 'Skillset',
        path: '/skillset',
        element: <div>Skillset</div>,
    },
    {
        title: 'Teachings',
        path: '/teachings',
        element: <div>Teachings</div>,
    },
    {
        title: 'Projects',
        path: '/projects',
        element: <div>projects</div>,
    },
    {
        title: 'Contact',
        path: '/contact',
        element: <div>About</div>,
    }
]

export const routes: RouteObject[] = [];
export const paths: PathsType = {};

enhancedRoutes.forEach((er: EnhancedRouterObject) => { 
    const { title, ...restObject } =  er;
    routes.push(restObject);
    paths[title] = er.path;
})

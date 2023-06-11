import type { RouteObject } from "react-router-dom";

export enum PathNameEnum {
    Home = 'Home',
    About = 'About',
    Work = 'Work',
    Contribute = 'Contribute',
    Skillset = 'Skillset',
    Teachings = 'Teachings',
    Projects = 'Projects',
    Contact = 'Contact'
}

export type PathsType = {
    [name in PathNameEnum]: RouteObject['path'];
}

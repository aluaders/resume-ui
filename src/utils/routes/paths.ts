import { PathsType, PathNameEnum } from "./router.interface";

export const Paths: PathsType = {
    [PathNameEnum.Home]: '/',
    [PathNameEnum.About]: '/about',
    [PathNameEnum.Work]: '/work',
    [PathNameEnum.Contribute]: '/contribute',
    [PathNameEnum.Skillset]: '/skillset',
    [PathNameEnum.Teachings]: '/teachings',
    [PathNameEnum.Projects]: '/projects',
    [PathNameEnum.Contact]: '/contact',
}
import { MenuNavigationProps } from "./MenuNavigation.interface";

export default function mockMenuNavigation(props: MenuNavigationProps) {
    return (<div data-testid="MenuNavigation-mock" {...props} />);
}

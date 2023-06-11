import { TabNavigationProps } from "./TabNavigation.interface";

export default function mockTabNavigation(props: TabNavigationProps) {
    return (<div data-testid="TabNavigation-mock" {...props} />);
}

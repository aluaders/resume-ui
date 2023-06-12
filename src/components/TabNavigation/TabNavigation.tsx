import * as React from 'react';

import { TabNavigationProps } from './TabNavigation.interface';
import { useStyles } from './TabNavigation.styles';

import { Tab, Tabs, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { Paths } from '@/utils/routes/paths';
import type { PathsType } from '@/utils/routes/router.interface';

const tabOptions = Object.keys(Paths).map(key => {
    const keyValue = key as keyof PathsType;

    return (
        <Tab 
            data-testid={`menu-tab-${key}`}
            key={key} 
            aria-controls={`menu-tab-${key}`} 
            label={key} 
            value={Paths[keyValue]} 
        />
    )
});

export function TabNavigation(props: TabNavigationProps) {
    const navigation = useNavigate();
    const { pathname } = useLocation();
    const [selected, setSelected] = React.useState(Paths.Home);
    const theme = useTheme();
    const { classes } = useStyles();

    React.useEffect(() => {
        setSelected(pathname);
    }, [pathname]);

    function handleChange(_event: React.SyntheticEvent, path: string) {
        navigation(path);
    }

    return (
        <div data-testid="TabNavigation" {...props}>
            <Tabs 
                value={selected} 
                className={classes.tabs}
                onChange={handleChange} 
                aria-label="content navigation"
                allowScrollButtonsMobile
                variant="scrollable"
                scrollButtons="auto"
                orientation={useMediaQuery(theme.breakpoints.up('md')) ? 'vertical' : 'horizontal'}
            >
                {tabOptions}
            </Tabs>        
        </div>
    )
}

export default TabNavigation;

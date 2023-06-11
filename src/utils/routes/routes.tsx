import * as React from 'react';
import type { RouteObject } from "react-router-dom";
import { Paths } from "./paths";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

const App = React.lazy(() => import('@/pages/App'));
const TabNavigation = React.lazy(() => import('@/components/TabNavigation'));
const Header = React.lazy(() => import('@/components/Header'));

function TempLayout() {
    const theme = useTheme();

    return (
        <div>
            <Header />
                <Box sx={{...theme.mixins.toolbar}} />
            <Stack
                spacing={0}
                direction={useMediaQuery(theme.breakpoints.up('md')) ? 'row' : 'column'}
                alignItems="center"
            >
                <TabNavigation />
                <App />
            </Stack>
        </div>
    )
}

export const routes: RouteObject[] = [
    {
        path: Paths.Home,
        element: <TempLayout />,
    },
    {
        path: Paths.About,
        element: <TempLayout />,
    },
    {
        path: Paths.Work,
        element: <TempLayout />,
    },
    {
        path: Paths.Contribute,
        element: <TempLayout />,
    },
    {
        path: Paths.Skillset,
        element: <TempLayout />,
    },
    {
        path: Paths.Teachings,
        element: <TempLayout />,
    },
    {
        path: Paths.Projects,
        element: <TempLayout />,
    },
    {
        path: Paths.Contact,
        element: <TempLayout />,
    }
]

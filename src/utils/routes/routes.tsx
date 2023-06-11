import type { RouteObject } from "react-router-dom";
import { Paths } from "./paths";
import React from "react";

const App = React.lazy(() => import('@/pages/App'));
const TabNavigation = React.lazy(() => import('@/components/TabNavigation'));

export const routes: RouteObject[] = [
    {
        path: Paths.Home,
        element: <App />,
    },
    {
        path: Paths.About,
        element: <TabNavigation />,
    },
    {
        path: Paths.Work,
        element: <div>Work</div>,
    },
    {
        path: Paths.Contribute,
        element: <div>Contribute</div>,
    },
    {
        path: Paths.Skillset,
        element: <div>Skillset</div>,
    },
    {
        path: Paths.Teachings,
        element: <div>Teachings</div>,
    },
    {
        path: Paths.Projects,
        element: <div>projects</div>,
    },
    {
        path: Paths.Contact,
        element: <div>contact</div>,
    }
]

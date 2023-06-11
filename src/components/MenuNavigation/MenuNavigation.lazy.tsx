import * as React from 'react';
import { lazy, Suspense } from 'react';

import { Loading } from './MenuNavigation.load';
import { MenuNavigationProps } from './MenuNavigation.interface';

const LazyMenuNavigation= lazy(() => import('./MenuNavigation'));

const MenuNavigation = (props: MenuNavigationProps) => (
  <Suspense fallback={<Loading />}>
    <LazyMenuNavigation {...props} />
  </Suspense>
);

export default MenuNavigation;

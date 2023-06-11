import * as React from 'react';
import { lazy, Suspense } from 'react';

import { TabNavigationProps } from './TabNavigation.interface';
import { Loading } from './TabNavigation.load';

const LazyTabNavigation= lazy(() => import('./TabNavigation'));

const TabNavigation = (props: TabNavigationProps) => (
  <Suspense fallback={<Loading />}>
    <LazyTabNavigation {...props} />
  </Suspense>
);

export default TabNavigation;

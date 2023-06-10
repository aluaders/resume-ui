import * as React from 'react';
import { lazy, Suspense } from 'react';

import { Loading } from './Header.load';

const LazyHeader= lazy(() => import('./Header'));

const Header = () => (
  <Suspense fallback={<Loading />}>
    <LazyHeader />
  </Suspense>
);

export default Header;

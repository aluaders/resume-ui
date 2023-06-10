import * as React from 'react';
import { lazy, Suspense } from 'react';

import { TemplateNameProps } from './TemplateName.interface';
import { Loading } from './TemplateName.load';

const LazyTemplateName= lazy(() => import('./TemplateName'));

const TemplateName = (props: TemplateNameProps) => (
  <Suspense fallback={<Loading />}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;

import { faker } from '@faker-js/faker';

import { TemplateNameProps } from './TemplateName.interface';

export const MockTemplateNameProps = (): TemplateNameProps => ({
    display: faker.word.sample(5),
});

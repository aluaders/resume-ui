import * as React from 'react';

import { TemplateNameProps } from './TemplateName.interface';
import { TemplateNamePropsDefault } from './TemplateName.default';
import { useStyles } from './TemplateName.styles';

export function TemplateName(props: TemplateNameProps) {
    const { classes } = useStyles();
    const propsValues: TemplateNameProps = { ...TemplateNamePropsDefault, ...props};
    const { display } = propsValues;

    return (
        <div data-testid="TemplateName">
            <div className={classes.display}>{display}</div>
        </div>
    )
}

export default TemplateName;

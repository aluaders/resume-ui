import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    display: {
        fontSize: theme.typography.h3.fontSize,
    }
}));

import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    // TODO: move to layout
    tabs: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
}));

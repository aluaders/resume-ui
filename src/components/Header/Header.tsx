import * as React from 'react';

import { useStyles } from './Header.styles';
import { useTheme } from '@mui/material/styles';
import { AppBar, Avatar, Divider, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import avatar from '@/assets/images/anthony_avatar.jpg';
import MenuNavigation from '@/components/MenuNavigation';

export function Header() {
    const { classes, cx } = useStyles();
    const theme = useTheme();

    return (
        <AppBar data-testid='Header' position={useMediaQuery(theme.breakpoints.up('sm')) ? 'fixed' : 'static'}>
            <Toolbar>
                <Stack
                    direction="row" 
                    alignItems="center"
                    spacing={1}
                >
                    <Avatar alt="Anthony Luaders" src={avatar} className={classes.avatar} />
                    <Stack
                        direction={useMediaQuery(theme.breakpoints.up('lg')) ? 'row' : 'column'} 
                        justifyContent="flex-start"
                        alignItems={useMediaQuery(theme.breakpoints.up('lg')) ? 'baseline' : 'flex-start'}
                        spacing={useMediaQuery(theme.breakpoints.up('lg')) ? 1 : 0}
                    >
                        <Typography sx={{ typography: { lg: 'h4', sm: 'h6', xs: 'h5' } }} component="div">
                            Anthony Luaders
                        </Typography>
                        <FollowTheSignsIcon className={classes.nameDivider}/>
                        <Typography sx={{ typography: { lg: 'h6', xs: 'body1' } }} component="div" className={classes.jobTitle}>
                            Principal Software Engineer
                        </Typography>
                    </Stack>
                </Stack>
                <MenuNavigation className={classes.menu} />
                <Stack 
                    direction="row" 
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                    className={classes.slogan}
                >
                    <Typography className={cx(classes['slogan-word'], classes['slogan-word-1'])}>Try</Typography>
                    <Typography className={[classes['slogan-word'], classes['slogan-word-2']].join(' ')}>Fail</Typography>
                    <Typography className={[classes['slogan-word'], classes['slogan-word-3']].join(' ')}>Learn</Typography>
                    <Typography className={[classes['slogan-word'], classes['slogan-word-4']].join(' ')}>Teach</Typography>
                    <Typography className={[classes['slogan-word'], classes['slogan-word-5']].join(' ')}>Repeat</Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

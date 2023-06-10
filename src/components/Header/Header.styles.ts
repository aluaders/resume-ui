import { makeStyles } from "tss-react/mui";
import { keyframes } from '@mui/system';

const colorAnimation = keyframes`
    0%    {color: var(--color-1)}
    19%   {color: var(--color-1)}
    20%   {color: var(--color-2)}
    39%   {color: var(--color-2)}
    40%   {color: var(--color-3)}
    59%   {color: var(--color-3)}
    60%   {color: var(--color-4)}
    79%   {color: var(--color-4)}
    80%   {color: var(--color-5)}
    99%   {color: var(--color-5)}
    100%  {color: var(--color-1)}
`;

export const useStyles = makeStyles()((theme) => {
    const offColorAnimation = theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.text.disabled;
    
    return {
        avatar: {
            width: 50,
            height: 58,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '0%',
            borderBottomRightRadius: '0%',
            [theme.breakpoints.down('sm')]: {
                height: 50,
            }
        },
        jobTitle: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        nameDivider: {
            display: 'none',
            [theme.breakpoints.up('lg')]: {
                display: 'inherit',
            }
        },
        slogan: {
            marginLeft: 'auto',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        'slogan-word': {
            animation: `${colorAnimation} 10s linear infinite`,
        },
        'slogan-word-1': {
            '--color-1': 'inherit',
            '--color-2': offColorAnimation,
            '--color-3': offColorAnimation,
            '--color-4': offColorAnimation,
            '--color-5': offColorAnimation,
        },
        'slogan-word-2': {
            '--color-1': offColorAnimation,
            '--color-2': 'inherit',
            '--color-3': offColorAnimation,
            '--color-4': offColorAnimation,
            '--color-5': offColorAnimation,
        },
        'slogan-word-3': {
            '--color-1': offColorAnimation,
            '--color-2': offColorAnimation,
            '--color-3': 'inherit',
            '--color-4': offColorAnimation,
            '--color-5': offColorAnimation,
        },
        'slogan-word-4': {
            '--color-1': offColorAnimation,
            '--color-2': offColorAnimation,
            '--color-3': offColorAnimation,
            '--color-4': 'inherit',
            '--color-5': offColorAnimation,
        },
        'slogan-word-5': {
            '--color-1': offColorAnimation,
            '--color-2': offColorAnimation,
            '--color-3': offColorAnimation,
            '--color-4': offColorAnimation,
            '--color-5': 'inherit',
        },
    }
});

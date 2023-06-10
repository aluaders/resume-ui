import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({palette: { mode: 'dark' } });
const lightTheme = createTheme({palette: { mode: 'light' } });

export const themes = {
    dark: darkTheme,
    light: lightTheme,
};
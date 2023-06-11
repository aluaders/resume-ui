import * as React from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Paths } from '@/utils/routes/paths';
import type { PathsType } from '@/utils/routes/router.interface';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuNavigationProps } from './MenuNavigation.interface';

export function MenuNavigation(props: MenuNavigationProps) {
    const navigation = useNavigate();
    const { pathname } = useLocation();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (
        path: string,
      ) => {
        navigation(path);
        setAnchorEl(null);
    };

    const menuOptions = Object.keys(Paths).map(key => {
        const keyValue = key as keyof PathsType;
    
        return (
            <MenuItem 
                data-testid={`menu-item-${key}-testid`}
                key={key} 
                aria-controls={`menu-item-${key}`}
                onClick={() => handleMenuItemClick(Paths[keyValue] as string)}
                selected={key === pathname}
            >
                {key}
            </MenuItem>
        )
    });

    return (
        <div data-testid="MenuNavigation" {...props}>
            <IconButton
                id="menu-nav-button"
                aria-controls={open ? 'menu-nav-button' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-nav-positioned-menu"
                aria-labelledby="menu-nav-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {menuOptions}
            </Menu>
        </div>
    )
}

export default MenuNavigation;

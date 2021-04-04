import React, { useState, Fragment } from 'react';
import clsx from 'clsx';

// materia ui
import { Drawer, List, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

// internal
import MenuItem from './MenuItem';
import { useStyles } from '../styles';
import routes from '../routes';
import Logo1 from '../assets/logo1.svg'
import Logo2 from '../assets/logo2.svg'


const Navigation = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true)

    const toggleNvavigation = () => {
        setOpen(!open);
    }
    return (
        <div>
            <Drawer 
                classes={{ paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse ) }}
                className={classes.navigationDrawer}
                variant="permanent" 
                open={open}
            >
                <div className={clsx(classes.navigationToolbar, !open && classes.navigationToolbarCollapse)}>
                    <IconButton onClick={toggleNvavigation}>
                        { open ? <ChevronLeftIcon />: <MenuIcon /> }
                        
                    </IconButton>
                </div>
                <div className={classes.navigationLogoContainer}>
                    <img 
                        className={classes.navigationLogo} 
                        src={open ? Logo1: Logo2} 
                        alt="Quality Logo" 
                    />
                </div>
                <List className={classes.navigationList}>
                    {routes.map((route, index) => {
                        return (
                            <Fragment>
                                {route.path === '/sign-out' && (
                                    <div className={classes.navigationSpacer}></div>
                                )}
                                <MenuItem 
                                    key={index}
                                    label={route.label} 
                                    icon={route.icon} 
                                    activeIcon={route.activeIcon} 
                                    path={route.path} 
                                />
                            </Fragment>
                        );
                    })}
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation

import { Toolbar, IconButton, Typography, } from "@mui/material";
import React, { FC } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, DrawerHeader } from "../StyledComponents";

<DrawerHeader />


interface AppHeaderProps {
    open: boolean;
    handleDrawerToggle: () => void
}
const AppHeader: FC<AppHeaderProps> = ({ open, handleDrawerToggle }) => (
    <React.Fragment >
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Event Management System
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment >
)

export default AppHeader;
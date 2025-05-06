import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { DrawerHeader } from "../StyledComponents";
import AppHeader from "./AppHeader";

const MainLayout = () => {
    const [open, setOpen] = useState(true)


    const handleDrawerToggle = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppHeader open={open} handleDrawerToggle={handleDrawerToggle} />
            <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    )
}

export default MainLayout;
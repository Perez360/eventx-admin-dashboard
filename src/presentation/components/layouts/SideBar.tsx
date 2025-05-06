import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuListItem from '../MenuListItem';
import { MenuListItemData, sidebarMenus } from 'utils/data';
import { Drawer, DrawerHeader } from '../StyledComponents';
import React from 'react';


interface SidebarProps {
    open: boolean;
    handleDrawerToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerToggle }) => {

    return (
        <React.Fragment>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerToggle}>{<ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <Divider />
                <List>
                    {sidebarMenus.map((menu: MenuListItemData, index: number) => (
                        <MenuListItem
                            index={index}
                            title={menu.title}
                            icon={menu.icon}
                            open={open}
                            link={menu.link}
                            subMenuListItems={menu.subMenuListItems} />

                    ))}
                </List>
            </Drawer>
        </React.Fragment >
    );
}

export default Sidebar
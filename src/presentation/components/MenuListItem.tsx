import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import  { FC, ReactNode } from "react"
import { useNavigate } from "react-router-dom";


interface MenuListItemProps {
    index: number;
    open: boolean;
    title: string;
    link: string
    subMenuListItems: [];
    icon: ReactNode
}


const MenuListItem: FC<MenuListItemProps> = ({ index, open, title, link, subMenuListItems, icon }) => {
    const navigate = useNavigate()

    return (
        < ListItem
            onClick={() => navigate(link)}
            key={title} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </ListItem >
    )
}
export default MenuListItem;
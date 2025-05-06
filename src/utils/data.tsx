import { SpaceDashboard, PeopleRounded, FolderSpecialRounded, EventAvailableRounded } from "@mui/icons-material";
import { ReactNode } from "react";
export const sidebarMenus: MenuListItemData[] = [
    {
        title: "Dashboard",
        icon: <SpaceDashboard />,
        link: "/app",
        subMenuListItems: []
    },
    {
        title: "User",
        icon: <PeopleRounded />,
        link: "user",
        subMenuListItems: []
    },
    {
        title: "Kyc",
        icon: <FolderSpecialRounded />,
        link: "kyc",
        subMenuListItems: []
    }, {
        title: "Event",
        icon: <EventAvailableRounded />,
        link: "event",
        subMenuListItems: []
    }]

export interface MenuListItemData {
    title: string;
    icon: ReactNode;
    link: string
    subMenuListItems: []
}
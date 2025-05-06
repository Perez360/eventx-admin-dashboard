import MainLayout from "presentation/components/layouts/MainLayout";
import { Navigate } from "react-router-dom";
import KycPage from "presentation/main/kyc/KycPage";
import EventPage from "presentation/main/event/EventPage";
import DashboardPage from "presentation/main/dashboard/DashboardPage";
import UserPage from "presentation/main/user/UserPage";
import MediaPage from "presentation/main/media/MediaPage";

const MainRoutes =
{
    path: "/app",
    element: <MainLayout />,
    children: [
        { path: "/app", element: <Navigate to={"dashboard"} /> },
        { path: "dashboard", exact: true, element: <DashboardPage /> },
        { path: "user", exact: true, element: <UserPage /> },
        { path: "kyc", exact: true, element: <KycPage /> },
        { path: "event", exact: true, element: <EventPage /> },
        { path: "media", exact: true, element: <MediaPage /> },
    ]
}

export default MainRoutes;
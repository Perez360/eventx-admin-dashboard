import { GridColDef, getGridStringOperators,getGridSingleSelectOperators } from "@mui/x-data-grid";
import moment from "moment";

export const UserColumns: GridColDef[] = [
    {
        field: "firstName",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Firstname",
        filterOperators:getGridStringOperators(),
        
    },
    {
        field: "otherName",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Othername"
    },
    {
        field: "lastName",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Lastname"
    },
    {
        field: "email",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Email"
    },
    {
        field: "status",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Status"
    },
    {
        field: "role",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Role"
    },
    {
        field: "createdAt",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Date created",
        valueGetter: (value) => (value ? moment(value).format("LLL") : "N/A")
    },
    {
        field: "updatedAt",
        flex: 1,
        align: "center",
        type: "string",
        headerAlign: "center",
        headerName: "Date modified",
        valueGetter: (value) => (value ? moment(value).format("LLL") : "N/A")
    }
]
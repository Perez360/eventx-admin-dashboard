import { Box } from "@mui/material";
import { DataGrid, GridFilterModel, GridPaginationModel, GridSortModel, GridToolbar } from "@mui/x-data-grid";
import { useSearchUsersQuery } from "services/UserAPI";
import React, { useState } from "react";
import { UserColumns } from "utils/colums";
import { User } from "models/user/User";
import { DataGridService } from "utils/DataGridService";

const UserPage = () => {

    const dataGridService = new DataGridService("Users");

    const [paginationModel, setPaginationModel] = useState(
        dataGridService.getPaginationModel()
    );
    const [sortModel, setSortModel] = useState(dataGridService.getSortModel());

    const [filterModel, setFilterModel] = useState(
        dataGridService.getFilterModel()
    );
    const { data } = useSearchUsersQuery(filterModel.value)


    const handlePaginationModelChange = (paginationModel: GridPaginationModel) => {
        dataGridService.setPaginationModel(paginationModel);
        setPaginationModel(paginationModel);
    };
    const handleFilterModelChange = (filterModel: GridFilterModel) => {
        dataGridService.setFilterModel(filterModel);
        setFilterModel(filterModel);
    };
    const handleSortModelChange = (sortModel: GridSortModel) => {
        dataGridService.setSortModel(sortModel);
        setSortModel(sortModel);
    };

    return (<React.Fragment>
        <Box >
            <DataGrid
                sx={{
                    boxShadow: 1,
                    border: 2,
                    borderColor: "white",
                }}
                slotProps={{
                    filterPanel: {
                        filterFormProps: {
                            operatorInputProps: {
                                disabled: true, // If you only want to disable the operator
                                sx: { display: "none" } // If you want to remove it completely
                            },
                        }
                    }
                }}
                autoHeight
                rows={data?.data?.data ?? []}
                rowCount={data?.data?.totalElements}
                getRowId={(user: User) => user.id}
                columns={UserColumns}
                slots={{ toolbar: GridToolbar }}
                disableColumnSelector
                disableDensitySelector
                filterMode="server"
                paginationMode="server"
                paginationModel={paginationModel}
                sortModel={sortModel}
                filterModel={filterModel}
                onPaginationModelChange={handlePaginationModelChange}
                onSortModelChange={handleSortModelChange}
                onFilterModelChange={handleFilterModelChange}
            />
        </Box>
    </React.Fragment>)
}

export default UserPage;
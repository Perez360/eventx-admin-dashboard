import { Box } from "@mui/material";
import { DataGrid, GridFilterModel, GridPaginationModel, GridSortModel, GridToolbar } from "@mui/x-data-grid";
import { useSearchKycsQuery } from "services/KycAPI";
import React, { useState } from "react";
import { UserColumns } from "utils/colums";
import { DataGridService } from "utils/DataGridService";
import { Kyc } from "@models/kyc/Kyc";

const KycPage = () => {
    const dataGridService = new DataGridService("Kyc");

    const [paginationModel, setPaginationModel] = useState(
        dataGridService.getPaginationModel()
    );
    const [sortModel, setSortModel] = useState(dataGridService.getSortModel());

    const [filterModel, setFilterModel] = useState(
        dataGridService.getFilterModel()
    );

    const { data } = useSearchKycsQuery(filterModel.value)


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
                autoHeight
                rows={data?.data?.data ?? []}
                rowCount={data?.data?.totalElements}
                getRowId={(kyc: Kyc) => kyc.id}
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

export default KycPage;
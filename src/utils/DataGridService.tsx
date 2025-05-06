import { GridFilterModel, GridLogicOperator, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";

export class DataGridService {
  private pageName: string
  private defaultFilterModel: GridFilterModel
  private defaultSortModel: GridSortModel
  private defaultPaginationModel: GridPaginationModel


  constructor(pageName: string) {
    this.pageName = pageName;

    this.defaultFilterModel = {
      items: [],
      logicOperator: GridLogicOperator.And,
      quickFilterValues: [],
      quickFilterLogicOperator: GridLogicOperator.And,
    };

    this.defaultSortModel = [{ field: "", sort: "desc" }];
    this.defaultPaginationModel = {
      pageSize: 25,
      page: 0,
    };
  }

  //For managing pagination
  setPaginationModel(paginationModel: GridPaginationModel) {
    const page = localStorage.getItem(this.pageName);
    if (page) {
      const pageStorage = JSON.parse(page);
      pageStorage["pagination"] = paginationModel;
      localStorage.setItem(this.pageName, JSON.stringify(pageStorage));
    } else {
      const pageStorage: any = {};
      pageStorage["pagination"] = paginationModel;
      localStorage.setItem(this.pageName, JSON.stringify(pageStorage));
    }
  }
  getPaginationModel() {
    const pageStorage = localStorage.getItem(this.pageName);
    if (pageStorage && JSON.parse(pageStorage)["pagination"]) {
      return JSON.parse(pageStorage)["pagination"];
    } else {
      return this.defaultPaginationModel;
    }
  }

  //For managing sorting
  setSortModel(sortModel: GridSortModel) {
    const page = localStorage.getItem(this.pageName);
    if (page) {
      const pageStorage = JSON.parse(page);
      pageStorage["sorting"] = sortModel;
      localStorage.setItem(this.pageName, JSON.stringify(pageStorage));
    } else {
      const pageStorage: any = {};
      pageStorage["sorting"] = sortModel;
      localStorage.setItem(this.pageName, JSON.stringify(pageStorage));
    }
  }

  getSortModel() {
    const pageStorage = localStorage.getItem(this.pageName);
    if (pageStorage && JSON.parse(pageStorage)["sorting"]) {
      return JSON.parse(pageStorage)["sorting"];
    } else {
      return this.defaultSortModel;
    }
  }

  ///For managing filtering
  setFilterModel(filterModel: GridFilterModel) {
    const page = localStorage.getItem(this.pageName);
    if (page) {
      const pageStorage = JSON.parse(page);
      pageStorage["filter"] = filterModel;
      localStorage.setItem(this.pageName, JSON.stringify(pageStorage));
    } else {
      const pageStorage: any = {};
      pageStorage["filter"] = filterModel;
      localStorage.setItem(this.pageName, JSON.stringify(pageStorage));
    }
  }

  getFilterModel() {
    const pageStorage = localStorage.getItem(this.pageName);
    if (pageStorage && JSON.parse(pageStorage)["filter"]) {
      return JSON.parse(pageStorage)["filter"];
    } else {
      return this.defaultFilterModel;
    }
  }
}

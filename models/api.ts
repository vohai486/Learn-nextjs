export interface Pagination {
  _page: number;
  _limit: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: Array<T>;
  pagination: Pagination;
}
export interface ListParams {
  _page: number;
  _limit: number;
  title_like: string;
}

export interface PaginationQuery {
    pageSize: number;
    pageNumber: number;
    search?: string;
    sort?: "ASC" | "DESC";
}

export interface Pagination<T> {
    data: T[];
    total: number;
    pageNumber: number;
}
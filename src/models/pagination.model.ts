export interface PaginationQuery {
    pageSize: number;
    pageNumber: number;
    search?: string;
    sortString?: string;
}

export interface Pagination<T> {
    data: T[];
    total: number;
    pageNumber: number;
}
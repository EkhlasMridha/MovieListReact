import Pagination, { PaginationProps } from "rc-pagination";
import "./app-pagination.css";

export const AppPagination = (props: PaginationProps) => {
    return <Pagination {...props} />
}
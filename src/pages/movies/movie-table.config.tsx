import { ColumnsType } from "rc-table/lib/interface";
import { TableColumn } from "react-data-table-component";

export const movieTableColumns: TableColumn<any>[] = [
    {
        name: "Name",
        selector: (row: any) => row.name,
        id: "name"
    },
    {
        name: "Release Date",
        selector: (row) => row.releaseDate,
        id: "releaseDate",
        cell: (row, rowIndex) => {
            let date = new Date(row?.releaseDate);
            return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        }
    }
]
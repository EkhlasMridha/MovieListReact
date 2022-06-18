import { ColumnsType } from "rc-table/lib/interface";

export const movieTableColumns: ColumnsType<any> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Release Date",
        dataIndex: "releaseDate",
        key: "releaseDate",
        render: (value, record, index) => {
            let date = new Date(value);
            return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        }
    }
]
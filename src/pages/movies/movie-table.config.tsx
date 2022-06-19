import { TableColumn } from "react-data-table-component";
import { NavLink } from "react-router-dom";

export const getMovieTableColumn = (props: any) => {
    const movieTableColumns: TableColumn<any>[] = [
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
        },
        {
            name: "Actions",
            width: "100px",
            center: true,
            button: true,
            sortable: false,
            cell: (row, rowIndex, column) => {
                return (
                    <div style={{ display: "flex", flexDirection: "row", padding: "0px 8px" }}>
                        <span
                            className="cursor-pointer"
                        >
                            <NavLink to={`/movies/${row.id}`} style={{ textDecoration: "none", color: "blue" }}>Edit</NavLink>
                        </span>
                        <span
                            className="cursor-pointer"
                            style={{ marginLeft: "8px", color: "red" }}
                            onClick={() => {
                                props.onDelete(row)
                            }}
                        >
                            Remove
                        </span>
                    </div>
                )
            }
        }
    ]
    return movieTableColumns;
}


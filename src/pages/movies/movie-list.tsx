import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../shared/page.wrapper";
import { useAppDispatch, useAppSelector } from "../../store/hook.type";
import { deleteMovieSuccess, getMovies, updatePageNumber, updatePageSize } from "../../store/movies/movie.action";
import { getMovieTableColumn } from "./movie-table.config";
import DataTable from "react-data-table-component";
import * as _lodash from "lodash";
import { TextSearch } from "../../shared/SearchText/text.search";

const MovieList = (props: any) => {

    const defaultPageSize = 3;
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const movieState = useAppSelector(state => state.movie);

    useEffect(() => {
        getMovieList();
    }, [])

    const getMovieList = () => {
        dispatch(getMovies({
            pageNumber: movieState.pageNumber ?? 1,
            pageSize: defaultPageSize
        }))
    }

    const goTo = (path: string) => {
        navigate(path, { replace: true })
    }

    const deleteMovie = (data: any) => {
        dispatch(deleteMovieSuccess(data.id));
    }

    let columns = getMovieTableColumn({
        ...props,
        onDelete: deleteMovie
    });

    const onSearch = (event: any) => {
        let value = event.target.value;
        dispatch(getMovies({
            pageNumber: 1,
            pageSize: movieState.pageSize ?? 3,
            search: value
        }))
    }

    return (
        <PageWrapper title="Movie List" actionButtons={[
            <button className="cursor-pointer" key={"add-movie"} onClick={() => goTo("/movies/create")}>
                Add Movie
            </button>
        ]}>
            <div className="full-width">
                <TextSearch trigger={onSearch} />
                <DataTable
                    sortServer={true}
                    onSort={(column, sortDirection) => {
                        console.log(column.id);
                        let parameter = column.id + "~" + sortDirection;
                        dispatch(getMovies({
                            pageNumber: movieState.pageNumber ?? 1,
                            pageSize: movieState.pageSize ?? 3,
                            sortString: parameter
                        }))
                    }}
                    striped
                    persistTableHead={true}
                    data={movieState.movieList ?? []}
                    columns={columns}
                    progressPending={movieState.isLoadingList}
                    paginationServer={true}
                    pagination={true}
                    paginationTotalRows={movieState.totalCount}
                    paginationPerPage={movieState.pageSize}
                    paginationRowsPerPageOptions={[3, 5, 10]}
                    paginationDefaultPage={movieState.pageNumber ?? 1}
                    onChangePage={(page, totalRows) => {
                        console.log("Total rows", totalRows);
                        dispatch(getMovies({
                            pageNumber: page,
                            pageSize: movieState.pageSize ?? defaultPageSize
                        }))
                        dispatch(updatePageNumber(page));
                    }}
                    onChangeRowsPerPage={(currentRowsPerPage, currentPage) => {
                        dispatch(updatePageSize(currentRowsPerPage))
                        dispatch(getMovies({
                            pageNumber: movieState.pageNumber ?? 1,
                            pageSize: currentRowsPerPage
                        }))
                    }}
                />
            </div>
        </PageWrapper>

    )
}

export default MovieList;
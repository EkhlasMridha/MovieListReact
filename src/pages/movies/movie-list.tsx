import Table from "rc-table";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../shared/page.wrapper";
import { useAppDispatch, useAppSelector } from "../../store/hook.type";
import { getMovies, updatePageNumber, updatePageSize } from "../../store/movies/movie.action";
import { movieTableColumns } from "./movie-table.config";
import { AppPagination } from "../../shared/Pagination/app-pagination";
import DataTable from "react-data-table-component";

const MovieList = (props: any) => {
    let columns = movieTableColumns;
    const defaultPageSize = 3;
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const movieState = useAppSelector(state => state.movie);

    useEffect(() => {
        getMovieList()
    }, [])

    const getMovieList = () => {
        dispatch(getMovies({
            pageNumber: 1,
            pageSize: defaultPageSize
        }))
        dispatch(updatePageSize(defaultPageSize))
    }

    const goTo = (path: string) => {
        navigate(path, { replace: true })
    }

    return (
        <PageWrapper title="Movie List" actionButtons={[
            <button className="cursor-pointer" key={"add-movie"} onClick={() => goTo("/movies/create")}>
                Add Movie
            </button>
        ]}>
            <div className="full-width">
                <DataTable
                    striped
                    data={movieState.movieList ?? []}
                    columns={columns}
                    progressPending={movieState.isLoadingList}
                    paginationServer={true}
                    pagination={true}
                    paginationTotalRows={movieState.totalCount}
                    paginationPerPage={3}
                    paginationRowsPerPageOptions={[3, 5, 10]}
                    paginationDefaultPage={1}
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
                    }} />
            </div>
        </PageWrapper>

    )
}

export default MovieList;
import Table from "rc-table";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import movieApi from "../../data-api/movie.api";
import { PageWrapper } from "../../shared/page.wrapper";
import { useAppDispatch, useAppSelector } from "../../store/hook.type";
import { getMovies } from "../../store/movies/movie.action";
import { movieTableColumns } from "./movie-table.config";

const MovieList = (props: any) => {
    let columns = movieTableColumns;
    const [data, setData] = useState<any>();
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const movieState = useAppSelector(state => state.movie);

    useEffect(() => {
        getMovieList()
    }, [])

    const getMovieList = () => {
        dispatch(getMovies({
            pageNumber: 1,
            pageSize: 10
        }))
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
            <Table rowKey={(row) => row.id}
                columns={columns}
                data={movieState.movieList}
            />
        </PageWrapper>

    )
}

export default MovieList;
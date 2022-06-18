import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../../../shared/error.message";
import { PageWrapper } from "../../../shared/page.wrapper"
import { useAppDispatch } from "../../../store/hook.type";
import { addMovie } from "../../../store/movies/movie.action";

export const EditMovie = (props: any) => {
    let { id } = useParams();
    let navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const movieId = isNaN(Number(id)) ? 0 : Number(id);
    useEffect(() => {

    }, []);

    const goBack = () => {
        navigate("/movies", { replace: true })
    }

    const onSubmit = (data: any) => {
        console.log(data);
        data["id"] = movieId;
        dispatch(addMovie(data));
    }

    return (
        <PageWrapper title={movieId === 0 ? "Add Movie" : "Edit Movie"} onBack={goBack}>
            <div style={{ display: "inline-block", width: "100%" }}>
                <div className="body-card" style={{ maxWidth: "350px" }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Movie Name</label>
                            <input {...register("name", { required: true })} />
                            <ErrorMessage isVisible={errors.movieName} message={"Movie name is required"} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Release Date</label>
                            <input type={"date"} {...register("releaseDate", { required: true })} />
                            <ErrorMessage isVisible={errors.releaseDate} message={"Release Date is required"} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "end" }}>
                            <button type={"submit"} className="cursor-pointer">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}
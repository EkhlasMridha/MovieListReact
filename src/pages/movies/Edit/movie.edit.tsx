import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import movieApi from "../../../data-api/movie.api";
import { ErrorMessage } from "../../../shared/error.message";
import { PageWrapper } from "../../../shared/page.wrapper"
import { useAppDispatch } from "../../../store/hook.type";
import { addMovieSuccess, updateMovieSuccess } from "../../../store/movies/movie.action";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

export const EditMovie = (props: any) => {
    let { id } = useParams();
    let navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm();

    const movieId = isNaN(Number(id)) ? 0 : Number(id);
    useEffect(() => {
        if (movieId !== 0) {
            initMovieData();
        }

    }, []);

    const initMovieData = () => {
        movieApi.getMovieById(movieId).then(res => {
            setValue("name", res.name);
            setValue("releaseDate", new Date(res.releaseDate))
        })
    }

    const goBack = () => {
        navigate("/movies", { replace: true })
    }

    const onSubmit = (data: any) => {
        console.log(data);
        data["id"] = movieId;

        movieApi.saveMovie(data).then(res => {

            if (movieId === 0) {
                dispatch(addMovieSuccess(res));
                toast.success(`${data.name} Added successfully`)
            } else {
                dispatch(updateMovieSuccess(res));
                toast.success(`${data.name} Updated successfully`)
            }
            navigate("/movies")
        })
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
                            <Controller control={control}
                                name="releaseDate"
                                render={({ field }) => (
                                    <DatePicker onChange={(date) => field.onChange(date)}
                                        selected={field.value}
                                        dateFormat={"dd-MM-yyyy"} />
                                )} />
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
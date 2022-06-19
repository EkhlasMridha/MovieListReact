import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../data-api/auth.api";
import { updateLoginStatus } from "../../store/common/common.action";
import { useAppDispatch } from "../../store/hook.type";
import { setToken } from "../../token/token.data";
import AuthPageWrapper from "./auth-page.wrapper";
import "./auth-style.css"

const Login = (props: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit = (data: any) => {
        console.log(data);
        authApi.login(data).then(res => {
            setToken(res);
            dispatch(updateLoginStatus(true));
            navigate("/movies", { replace: true })
        })
    }

    return (
        <AuthPageWrapper>
            <div className="login-card">
                <section className="card-header">
                    <h4 style={{ textAlign: "right" }}>Login</h4>
                </section>
                <section className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", width: "100%" }}>
                            <label style={{ marginRight: "4px", width: "70px", textAlign: "left" }}>Email</label>
                            <input {...register("email")} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <label style={{ marginRight: "4px", width: "70px", textAlign: "left" }}>Password</label>
                            <input {...register("password")} type="password" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "end", width: "100%", marginTop: "18px", flexDirection: "row" }}>
                            <div style={{ fontSize: "12px", marginRight: "10px" }}>
                                Don't have a account?
                                <Link to={"/signup"}>Signup</Link>
                            </div>
                            <button>
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </AuthPageWrapper>
    )
}

export default Login;
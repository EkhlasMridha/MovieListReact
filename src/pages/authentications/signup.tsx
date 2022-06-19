import AuthPageWrapper from "./auth-page.wrapper";
import { Link, useNavigate } from "react-router-dom";
import "./auth-style.css"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { ErrorMessage } from "../../shared/error.message";
import authApi from "../../data-api/auth.api";
import { toast } from "react-toastify";

const Signup = (props: any) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    let navigate = useNavigate();

    const [globalError, setGlobalError] = useState<string>("");

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data: any) => {
        authApi.signup(data).then(res => {
            toast.success("Signup success");
            navigate("/login");
        }, (error) => {
            setGlobalError(error.response.data.message[0]);
        })
    }
    return (
        <AuthPageWrapper>
            <div className="login-card">
                <section className="card-header">
                    <h4 style={{ textAlign: "right" }}>Signup</h4>
                </section>
                <section className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>First Name</label>
                                <input {...register("firstName", {
                                    required: "First name is required", maxLength: {
                                        value: 250,
                                        message: "Maximum 250 charecters are allowed"
                                    }
                                })} />
                                <ErrorMessage errors={errors.firstName} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Last Name</label>
                                <input {...register("lastName", {
                                    required: "Last name is required", maxLength: {
                                        value: 250,
                                        message: "Maximum 250 charecters are allowed"
                                    }
                                })} />
                                <ErrorMessage errors={errors.lastName} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", width: "100%" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Email</label>
                            <input type={"email"} {...register("email", {
                                required: "Email is required", pattern: {
                                    value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                                    message: "Invalid email address"
                                }
                            })} />
                            <ErrorMessage errors={errors.email} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", maxWidth: "177px", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Password</label>
                                <input style={{ maxWidth: "177px" }} {...register("password", {
                                    required: "Password is required", pattern: {
                                        value: /^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/,
                                        message: "Password must contain uppercase,lowercase letters and numbers. Minimum length must be 6"
                                    }
                                })} />
                                <ErrorMessage errors={errors.password} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Confirm Password</label>
                                <input style={{ maxWidth: "177px" }} {...register("confirmPassword", {
                                    validate: value => value === password.current || "Passwords do not match"
                                })} />
                                <ErrorMessage errors={errors.confirmPassword} />
                            </div>

                        </div>
                        <section>
                            {globalError !== "" && <span style={{ fontSize: "12px", color: "red" }}>{globalError}</span>}
                        </section>
                        <div style={{ display: "flex", justifyContent: "end", width: "100%", marginTop: "14px" }}>
                            <div style={{ fontSize: "12px", marginRight: "10px" }}>
                                Already have a account?
                                <Link to={"/login"}>LogIn</Link>
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

export default Signup;
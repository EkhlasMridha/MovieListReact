import AuthPageWrapper from "./auth-page.wrapper";
import { Link } from "react-router-dom";
import "./auth-style.css"
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Signup = (props: any) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data: any) => {
        console.log(data);
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

                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Last Name</label>
                                <input {...register("lastName", {
                                    required: "Last name is required", maxLength: {
                                        value: 250,
                                        message: "Maximum 250 charecters are allowed"
                                    }
                                })} />
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
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Password</label>
                                <input {...register("password", {
                                    required: "Password is required", pattern: {
                                        value: /^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/,
                                        message: "Password must contain uppercase,lowercase letters and numbers. Minimum length must be 6"
                                    }
                                })} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Confirm Password</label>
                                <input {...register("confirmPassword", {
                                    validate: value => value === password.current || "Passwords do not match"
                                })} />
                            </div>
                        </div>
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
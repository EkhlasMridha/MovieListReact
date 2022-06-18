import AuthPageWrapper from "./auth-page.wrapper";
import { Link } from "react-router-dom";
import "./auth-style.css"
import { useForm } from "react-hook-form";

const Signup = (props: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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
                                <input {...register("firstName", { required: true, minLength: 1, maxLength: 250 })} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Last Name</label>
                                <input {...register("lastName", { required: true, minLength: 1, maxLength: 250 })} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", width: "100%" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Email</label>
                            <input type={"email"} {...register("email", {
                                required: true, pattern: {
                                    value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                                    message: "Invalid email address"
                                }
                            })} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Password</label>
                                <input {...register("password", {
                                    required: true, pattern: {
                                        value: /^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/,
                                        message: "Password must contain uppercase,lowercase letters and numbers. Minimum length must be 6"
                                    }
                                })} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                                <label style={{ marginRight: "4px", textAlign: "left" }}>Confirm Password</label>
                                <input />
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
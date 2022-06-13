import AuthPageWrapper from "./auth-page.wrapper";
import "./auth-style.css"

const Login = (props: any) => {
    return (
        <AuthPageWrapper>
            <div className="login-card">
                <section className="card-header">
                    <h4 style={{ textAlign: "right" }}>Login</h4>
                </section>
                <section className="card-body">
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", width: "100%" }}>
                        <label style={{ marginRight: "4px", width: "70px", textAlign: "left" }}>Email</label>
                        <input />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label style={{ marginRight: "4px", width: "70px", textAlign: "left" }}>Password</label>
                        <input />
                    </div>
                    <div style={{ display: "flex", justifyContent: "end", width: "100%", marginTop: "18px" }}>
                        <button>
                            Submit
                        </button>
                    </div>
                </section>
            </div>
        </AuthPageWrapper>
    )
}

export default Login;
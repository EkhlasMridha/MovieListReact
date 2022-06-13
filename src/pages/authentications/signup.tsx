import AuthPageWrapper from "./auth-page.wrapper";
import "./auth-style.css"

const Signup = (props: any) => {
    return (
        <AuthPageWrapper>
            <div className="login-card">
                <section className="card-header">
                    <h4 style={{ textAlign: "right" }}>Signup</h4>
                </section>
                <section className="card-body">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>First Name</label>
                            <input />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Last Name</label>
                            <input />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", width: "100%" }}>
                        <label style={{ marginRight: "4px", textAlign: "left" }}>Email</label>
                        <input type={"email"} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px", marginRight: "8px" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Password</label>
                            <input />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                            <label style={{ marginRight: "4px", textAlign: "left" }}>Confirm Password</label>
                            <input />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "end", width: "100%", marginTop: "14px" }}>
                        <button>
                            Submit
                        </button>
                    </div>
                </section>
            </div>
        </AuthPageWrapper>
    )
}

export default Signup;
const AuthPageWrapper = (props: any) => {
    return (
        <div style={{ height: "100%", display: "flex" }}>
            <div style={{ margin: "auto" }}>
                {props.children ?? null}
            </div>
        </div>
    )
}

export default AuthPageWrapper;
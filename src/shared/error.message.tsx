import { useEffect } from "react";

interface ErrorMessageProps {
    errors?: any;
}

export const ErrorMessage = (props: ErrorMessageProps) => {

    return (
        <>
            {props.errors?.message &&
                <div style={{ color: "red", fontSize: "12px" }}>
                    {props.errors?.message}
                </div>
            }
        </>
    )
}
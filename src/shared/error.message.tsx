import { useEffect } from "react";

interface ErrorMessageProps {
    message: string;
    isVisible: boolean;
    errors?: any;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    useEffect(() => {
        console.log(props.errors)
    }, [props.errors])
    return (
        <>
            {props.isVisible &&
                <div style={{ color: "red", fontSize: "12px" }}>
                    {props.message}
                </div>
            }
        </>
    )
}
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hook.type";
import { isAuthenticated, removeToken } from "../token/token.data";
import "./page.wrapper.css";

interface PageWrapperProps {
    title: string | ReactNode;
    children: ReactNode | string;
    actionButtons?: ReactNode[];
    onBack?: () => void;
}

export const PageWrapper = (props: PageWrapperProps) => {
    let navigate = useNavigate();
    const commonState = useAppSelector(state => state.common);
    const authenticated = isAuthenticated();

    const onLogout = () => {
        removeToken();
        navigate("/login");
    }

    return (
        <div className="page-wrapper">
            <section className="page-header" key={"page-header"}>
                {props?.onBack &&
                    <div>
                        <button className="back-button" onClick={props.onBack}> <span className="back-button-icon">&#8249;</span></button>
                    </div>
                }
                <div key={"page-title"} className="header-title">{props?.title ?? "Page Title"}</div>
                <div key={"page-actions"} style={{ flex: "1 0 auto" }}></div>
                {
                    props.actionButtons?.map(button => {
                        return button;
                    })
                }
                {authenticated &&
                    <div style={{ padding: "0px 8px" }}>
                        <button className="cursor-pointer" onClick={onLogout}>Logout</button>
                    </div>
                }
            </section>
            <section className="page-content" key={"page-body"}>
                {props.children}
            </section>
        </div>
    )
}
import { ReactNode } from "react";
import "./page.wrapper.css";

interface PageWrapperProps {
    title: string | ReactNode;
    children: ReactNode | string;
    actionButtons?: ReactNode[];
    onBack?: () => void;
}

export const PageWrapper = (props: PageWrapperProps) => {
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
            </section>
            <section className="page-content" key={"page-body"}>
                {props.children}
            </section>
        </div>
    )
}
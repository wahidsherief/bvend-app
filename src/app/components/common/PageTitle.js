import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import BackButton from "./BackButton";

const PageTitle = (props) => {
    return (
        <React.Fragment>
            <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                    <div className="col-lg-6 title mb-30">
                        <h4>{props.title}</h4>
                    </div>
                    {props.action.hasAction &&
                        <div className="col-lg-6 title mb-30 d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link to={props.action.actionLink}>
                                <Button className="main-btn primary-btn btn-sm btn-hover">{props.action.actionTitle}</Button>
                            </Link>
                        </div>
                    }
                    {props.action.hasBack &&
                        <div className="col-lg-6 title mb-30 d-grid gap-2 d-md-flex justify-content-md-end">
                            <BackButton />
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageTitle
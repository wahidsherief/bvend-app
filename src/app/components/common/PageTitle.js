import React from "react";

const PageTitle = (props) => {
    return (
        <React.Fragment>
            <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title mb-30">
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageTitle
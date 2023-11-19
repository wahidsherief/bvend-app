import React from "react";
import { Empty, Loading, STATUS } from "services/CommonService";

const PageContent = ({ items, status, component }) => {
    return (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            {status === STATUS.LOADING && <Loading />}
                            {items?.length > 0 ? component({ items, status }) : status !== STATUS.LOADING && <Empty props='No data found' />}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default PageContent;

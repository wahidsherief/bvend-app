import React from "react";
import PageTitle from "../common/PageTitle";

const action = {
    hasAction: true,
    actionTitle: 'Add Product',
    actionLink: '/product/create'
}


const TopSection = () => {
    return (
        <React.Fragment>
            <PageTitle title='Dashboard' action={action} />
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="icon-card mb-30">
                        <div className="icon purple">
                            <i className="lni lni-cart-full"></i>
                        </div>
                        <div className="content">
                            <h6 className="mb-10">New Orders</h6>
                            <h3 className="text-bold mb-10">34567</h3>
                            <p className="text-sm text-success">
                                <i className="lni lni-arrow-up"></i> +2.00%
                                <span className="text-gray">(30 days)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="icon-card mb-30">
                        <div className="icon success">
                            <i className="lni lni-dollar"></i>
                        </div>
                        <div className="content">
                            <h6 className="mb-10">Total Income</h6>
                            <h3 className="text-bold mb-10">$74,567</h3>
                            <p className="text-sm text-success">
                                <i className="lni lni-arrow-up"></i> +5.45%
                                <span className="text-gray">Increased</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="icon-card mb-30">
                        <div className="icon primary">
                            <i className="lni lni-credit-cards"></i>
                        </div>
                        <div className="content">
                            <h6 className="mb-10">Total Expense</h6>
                            <h3 className="text-bold mb-10">$24,567</h3>
                            <p className="text-sm text-danger">
                                <i className="lni lni-arrow-down"></i> -2.00%
                                <span className="text-gray">Expense</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="icon-card mb-30">
                        <div className="icon orange">
                            <i className="lni lni-user"></i>
                        </div>
                        <div className="content">
                            <h6 className="mb-10">New User</h6>
                            <h3 className="text-bold mb-10">34567</h3>
                            <p className="text-sm text-danger">
                                <i className="lni lni-arrow-down"></i> -25.00%
                                <span className="text-gray"> Earning</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default TopSection
import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-6">
                            <div className="header-left d-flex align-items-center">
                                {/* <div className="menu-toggle-btn mr-20">
                                    <button
                                        id="menu-toggle"
                                        className="main-btn primary-btn btn-hover"
                                    >
                                        <i className="lni lni-chevron-left me-2"></i> Menu
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-6">
                            <div className="header-right">
                                <div className="profile-box ml-15">
                                    <button
                                        className="dropdown-toggle bg-transparent border-0"
                                        type="button"
                                        id="profile"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <div className="profile-info">
                                            <div className="info">
                                                <h6>John Doe</h6>
                                                <div className="image">
                                                    <img
                                                        src="assets/images/profile/profile-image.png"
                                                        alt=""
                                                    />
                                                    <span className="status"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment >
    )
}

export default Header
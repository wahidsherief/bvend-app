import React from 'react';

const PageNotFound = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="card" style={{ background: 'transparent', border: 'none' }}>
                <div className="card-body text-center">
                    <h2>404 ! Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;

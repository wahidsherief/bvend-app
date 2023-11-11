import LoginForm from "./actions/LoginForm";

const Login = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <LoginForm role='admin' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
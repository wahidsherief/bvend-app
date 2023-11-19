import { useEffect } from "react";
import LoginForm from "./actions/LoginForm";
import { removeAuthUser } from "services/AuthService";
import { persistor } from "app/store";
import { STATUS } from "services/CommonService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {

    const { status, validationErrors, role } = useSelector((state) => state.auth);

    useEffect(() => {
        if (status === STATUS.ERROR) {
            toast.error(validationErrors.message);
        }

    }, [status, validationErrors.message]);

    useEffect(() => {
        removeAuthUser()
        persistor.purge();
    }, []);


    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
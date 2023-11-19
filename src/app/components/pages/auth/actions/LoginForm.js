import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select } from "app/components/utils/form_elements"
import { useDispatch, useSelector } from "react-redux";
import { LoginFormValidationRules } from "../validation";
import { login } from "features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { STATUS, userRoles } from "services/CommonService";
import ErrorMessage from "app/components/common/ErrorMessage";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = { role: '', email: '', password: '' };
    const { status, validationErrors, role } = useSelector((state) => state.auth);


    const onSubmit = async (values) => {
        await dispatch(login(values))
        if (status === STATUS.IDLE && role) {
            navigate(`/${role}`);
        }
    }

    const emailProps = {
        name: 'email',
        type: 'email',
        placeholder: 'Enter email..',
    }

    const passwordProps = {
        name: 'password',
        type: 'password',
        placeholder: 'Enter password..',
    }

    const rolesProps = {
        name: 'role',
        placeholder: 'Select role..',
        filterBy: null,
        optionFields: userRoles,
    }

    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginFormValidationRules}
                onSubmit={onSubmit}
                enableReinitialize={true}
            >
                {({ errors, touched }) => (

                    <Form>
                        <div className="input-style-1">
                            <Input props={emailProps} error={errors.email && touched.email ? true : false} />
                        </div>

                        <div className="input-style-1">
                            <Input props={passwordProps} error={errors.password && touched.password ? true : false} />
                        </div>

                        <div className="select-style-2">
                            <div className="select-position">
                                <Select props={rolesProps} error={errors.role && touched.role ? true : false} />
                            </div>
                        </div>

                        <Button type="submit" className="main-btn w-100 primary-btn btn-hover btn-sm">Login</Button>
                    </Form>
                )}
            </Formik >

            {status === STATUS.ERROR && <ErrorMessage errors={validationErrors} />}
        </React.Fragment>
    )
}

export default LoginForm
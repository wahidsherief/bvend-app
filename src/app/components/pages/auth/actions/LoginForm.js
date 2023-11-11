import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select } from "app/components/utils/form_elements"
import { useDispatch } from "react-redux"
import { LoginFormValidationRules } from "../validation";
import { login } from "features/AuthSlice"
import { useNavigate } from "react-router-dom";
import { userRoles } from "services/CommonService";

const LoginForm = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const initialValues = { role: '', email: '', password: '' }

    const onSubmit = async (values, onSubmitProps) => {
        try {
            await dispatch(login(values))
            onSubmitProps.resetForm()
            navigate(`${values.role}/`)
        } catch (error) {
            console.log('Login Error: ', error)
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

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="main-btn primary-btn btn-hover btn-sm">Login</Button>
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default LoginForm
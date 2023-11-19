// CommonProductForm.js

import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { Input, Select, File } from "app/components/utils/form_elements";

const ProductForm = ({
    initialValues,
    validationSchema,
    onSubmit,
    handleClose,
    categoryProps,
    nameProps,
    brandProps,
    imageProps,
    buttonText
}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form encType="multipart/form-data">
                    <div className="input-style-1">
                        <Input props={nameProps} error={errors.name && touched.name ? true : false} />
                    </div>

                    <div className="select-style-2">
                        <div className="select-position">
                            <Select props={categoryProps} error={errors.product_categories_id && touched.product_categories_id ? true : false} />
                        </div>
                    </div>

                    <div className="input-style-1">
                        <Input props={brandProps} error={errors.brand && touched.brand ? true : false} />
                    </div>

                    <div className="input-style-1">
                        <File props={imageProps} setFieldValue={setFieldValue} error={errors.image && touched.image ? true : false} />
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit" className="primary-btn btn-hover btn-sm">{buttonText}</Button>
                        <Button type="button" onClick={handleClose} className="btn-dark btn-hover btn-sm">Cancel</Button>
                    </div>
                </Form>
            )}
        </Formik >
    );
};

export default ProductForm;

import { IMAGE_PATH } from "config";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const getFileName = (fullPath) => {
    return fullPath.replace(/^.*[\\/]/, '');
}

export const STATUS = Object.freeze({
    IDLE: 'success',
    ERROR: 'failed',
    LOADING: 'loading'
})


export const Loading = () => (
    <React.Fragment>
        <div className="loading-overlay">
            <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#cacaca"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    </React.Fragment>
)

export const Empty = ({ props }) => <h4>{props}</h4>

export const Wrong = () => <h4>Something went wrong...</h4>

const imageURLS = {
    'product': `${IMAGE_PATH}/product/`,
    'vendor': `${IMAGE_PATH}/vendor/`,
    'machine': `${IMAGE_PATH}/machine/`,
    'machine_qr_code': `${IMAGE_PATH}/machine_qr_code/`,
    'avatar': `${IMAGE_PATH}/avatar/`,
}

export const getImageURL = key => imageURLS[key]

export const machineTypes = [
    {
        id: 'store',
        name: 'Store'
    },
    {
        id: 'box',
        name: 'Box'
    }
]

export const userRoles = [
    {
        id: 'admin',
        name: 'Admin'
    },
    {
        id: 'vendor',
        name: 'Vendor'
    },
    {
        id: 'staff',
        name: 'Staff'
    },
    {
        id: 'customer',
        name: 'Customer'
    }
]

const getErrorMessage = (statusCode) => {
    const customMessages = [
        { code: 401, message: 'Invalid email or password.' },
        { code: 403, message: 'Access Denied: You do not have permission to view this content.' },
        { code: 404, message: 'Page Not Found: The requested page does not exist.' },
        { code: 422, message: 'Validation Error: Please check your input and try again.' },
        { code: 500, message: 'Server Error: Please try again later.' },
        { code: -1, message: 'An unexpected error occurred. Please try again.' }, // Default message
    ];

    const customMessage = customMessages.find((msg) => msg.code === statusCode);
    return customMessage ? customMessage.message : customMessages.find((msg) => msg.code === -1).message;
};


// Functions for each status code
const handle401Error = () => ({
    message: getErrorMessage(401),
    errors: { _global: [getErrorMessage(401)] },
});

const handle403Error = () => ({
    message: getErrorMessage(403),
    errors: { _global: [getErrorMessage(403)] },
});

const handle404Error = () => ({
    message: getErrorMessage(404),
    errors: { _global: [getErrorMessage(404)] },
});

const handle422Error = () => ({
    message: getErrorMessage(422),
    errors: { _global: [getErrorMessage(422)] },
});

const handle500Error = () => ({
    message: getErrorMessage(500),
    errors: { _global: [getErrorMessage(500)] },
});

// Object mapping status codes to handler functions
const errorHandlers = {
    401: handle401Error,
    403: handle403Error,
    404: handle404Error,
    422: handle422Error,
    500: handle500Error,
};

// Composite function that uses the handler based on the provided status code
export const transformErrorData = (errors) => {
    const statusCode = errors.response ? errors.response.status : (errors.status || -1);

    const errorHandler = errorHandlers[statusCode] || (() => ({
        message: getErrorMessage(statusCode),
        errors: { _global: [getErrorMessage(statusCode)] },
    }));

    return errorHandler();
};



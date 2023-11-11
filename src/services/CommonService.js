import { IMAGE_PATH } from "config";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const getFileName = (fullPath) => {
    return fullPath.replace(/^.*[\\/]/, '');
}

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
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


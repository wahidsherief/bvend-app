import { IMAGE_PATH } from "config";

export const getFileName = (fullPath) => {
    return fullPath.replace(/^.*[\\/]/, '');
}


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})



export const Loading = () => <h6 className="mb-4">Loading...</h6>

export const Empty = ({ props }) => <h4>{props}</h4>

export const Wrong = () => <h4>Something went wrong...</h4>

const imageURLS = {
    'product': `${IMAGE_PATH}/product/`,
    'vendor': `${IMAGE_PATH}/vendor/`
}

export const getImageURL = key => imageURLS[key]

export const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHTAOoUgmMmgvc3smmw-rCLkGn7xiKMa58dOK67GRrw&s'

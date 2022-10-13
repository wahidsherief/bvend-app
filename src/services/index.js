export const getFileName = (fullPath) => {
    return fullPath.replace(/^.*[\\/]/, '');
}


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})



export const Loading = ({ status }) => status === STATUS.LOADING && <h4 className="mb-4">Loading...</h4>
export const getFileName = (fullPath) => {
    return fullPath.replace(/^.*[\\/]/, '');
}


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})



export const Loading = () => <h2>Loading...</h2>
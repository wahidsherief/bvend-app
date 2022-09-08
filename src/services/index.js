const getFileName = (fullPath) => {
    return fullPath.replace(/^.*[\\\/]/, '');
}

export { getFileName }
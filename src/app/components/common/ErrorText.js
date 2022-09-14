const ErrorText = (props) => {
    return (
        <div className="invalid-feedback">
            {props.children}
        </div>
    )
}

export default ErrorText
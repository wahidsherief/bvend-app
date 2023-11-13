import React from "react"

const ErrorMessage = ({ errors }) => (
    <div className="error-container">
        {errors.errors && (
            <ul className="error-list">
                {Object.keys(errors.errors).map((field) => (
                    errors.errors[field].map((errorMessage, index) => (
                        <li className="error-item" key={`${field}-${index}`}>{errorMessage}</li>
                    ))
                ))}
            </ul>
        )}
    </div>
)

export default ErrorMessage
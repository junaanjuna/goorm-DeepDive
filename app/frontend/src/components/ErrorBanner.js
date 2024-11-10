import React from 'react'

const ErrorBanner = ({message}) => {

    const errorMessage = message || '에러입니다.';

    return (
        <div
            style={{
                backgroundColor: 'red',
                color: 'white',
            }}
        >
            {errorMessage}
        </div>
    )
}

export default ErrorBanner

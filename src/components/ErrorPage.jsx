import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
                <h1 className="text-9xl font-bold mb-4">404.</h1>
                <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg mb-6">Sorry, the page you are looking for does not exist or an error has occurred.</p>
                <a href="/" className="text-blue-500 hover:text-blue-700 text-lg">
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
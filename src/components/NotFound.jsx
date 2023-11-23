import React from 'react';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-2xl text-gray-600 mt-2">Page Not Found</p>
            <p className="mt-4 text-gray-600">
                The page you're looking for doesn't seem to exist.
            </p>
        </div>
    );
};

export default NotFound;

import React from 'react';
import './loader.css'

const Loader: React.FC = (): React.ReactElement => {
    return (
        <div className="flex justify-center">
            <div className="loader"></div>
        </div>
    )
}

export default Loader;

import React from 'react';
import Navigation from './Menu/Navigation';

const Header: React.FC = (): React.ReactElement => {
    return (
        <header className="border-b p-3 flex justify-between items-center bg-gray-800 text-white">
                <span className="font-bold">
                    Rick And Morty React Wiki
                </span>
            <Navigation/>
        </header>
    )
}

export default Header;

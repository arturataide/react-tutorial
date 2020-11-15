import React from 'react';

const Footer: React.FC = (): React.ReactElement => {
    return (
        <footer className="bg-gray-800 text-white text-center text-xs p-3 absolute bottom-0 w-full fixed">
            Artur Ataíde 2020 |
            &nbsp;<a href="https://arturataide.io" target="_blank" rel="noreferrer">arturataide.io</a>
        </footer>
    )
}

export default Footer;

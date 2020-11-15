import React from 'react';
import {Link} from 'react-router-dom';

type IMenuItemsProps = {
    setShowMenu: (boolean) => void;
}

const MenuItems: React.FC<IMenuItemsProps> = ({setShowMenu}: IMenuItemsProps) => {
    return (
        <ul>
            <li onClick={() => setShowMenu(false)}>
                <Link to="/" className="text-blue-500 py-3 border-t border-b block">Home</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
                <Link to="/characters" className="text-blue-500 py-3 border-b block">Characters</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
                <Link to="/about" className="text-blue-500 py-3 border-b block">About</Link>
            </li>
        </ul>
    );
}

export default MenuItems;

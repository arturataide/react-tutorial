import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';

type IMenuItemsProps = {
    setShowMenu: (boolean) => void;
}

class MenuItems extends React.Component<IMenuItemsProps, { any }> {

    render(): ReactElement {
        return (<ul>
            <li onClick={() => this.props.setShowMenu(false)}>
                <Link to="/" className="text-blue-500 py-3 border-t border-b block">Home</Link>
            </li>
            <li onClick={() => this.props.setShowMenu(false)}>
                <Link to="/about" className="text-blue-500 py-3 border-b block">About</Link>
            </li>
        </ul>);
    }
}

export default MenuItems;

import React, {ReactElement} from 'react';
import Navigation from './Navigation';

class Header extends React.Component<any, any> {
    render(): ReactElement {
        return (
            <header className="border-b p-3 flex justify-between items-center">
                <span className="font-bold">
                    App Name
                </span>
                <Navigation/>
            </header>
        )
    }
}

export default Header;

import React, {ReactElement} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Transition} from 'react-spring/renderprops';

type IShowMenu = {
    showMenu: boolean
}

class Navigation extends React.Component<any, IShowMenu> {

    state: IShowMenu = {
        showMenu: false
    }

    private setShowMenu(showMenu: boolean): void {
        this.setState({
            showMenu
        })
    }

    private get menu(): JSX.Element {
        return <Transition
            items={this.state.showMenu}
            from={{opacity: 0, transform: 'translateX(-100%)'}}
            enter={{opacity: 1, transform: 'translateX(0%)'}}
            leave={{opacity: 0, transform: 'translateX(-100%)'}}>
            {show =>
                show && ((props) =>
                    <div
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
                        <span className="font-bold">
                            The Menu
                        </span>
                        <ul>
                            <li>Homepage</li>
                        </ul>
                    </div>)}
        </Transition>;
    }

    private get menuMask(): JSX.Element {
        return <Transition
            items={this.state.showMenu}
            from={{opacity: 0}}
            enter={{opacity: 1}}
            leave={{opacity: 0}}>
            {show =>
                show && ((props) =>
                    <div
                        style={props}
                        className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
                        onClick={() => this.setShowMenu(false)}
                    >
                    </div>)}
        </Transition>;
    }

    render(): ReactElement {
        return (
            <nav>
                <span className="text-xl">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => this.setShowMenu(!this.state.showMenu)}/>
                </span>
                {this.menuMask}
                {this.menu}
            </nav>
        )
    }
}

export default Navigation;

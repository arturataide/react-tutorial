import React, {ReactElement} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Transition} from 'react-spring/renderprops';
import MenuItems from './MenuItems';

type IShowMenu = {
    showMenu: boolean
}

class Navigation extends React.Component<any, IShowMenu> {

    state: IShowMenu = {
        showMenu: false
    }

    constructor(props: any) {
        super(props);
        this.setShowMenu = this.setShowMenu.bind(this);
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
                        className="fixed bg-white top-0 left-0 w-1/5 h-full z-50 shadow p-4">
                        <div className="font-bold py-4 text-teal-800">
                            Menu
                        </div>
                        <MenuItems setShowMenu={this.setShowMenu}/>
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
                <span className="text-xl cursor-pointer">
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

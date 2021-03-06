import './header.scss';
import * as React from 'react';
import * as logo from '../../assets/images/logo.svg';

export interface HeaderCustomProps {
}

export default class Header extends React.Component<HeaderCustomProps, {}> {
    public render() {
        return <div className="navbar z-depth-1 p-0">
            <a href="https://github.com/PeterKottas/guestbell-forms" className="navbar__logo text-center p-3">
                <img src={logo} className="navbar__logo text-left" alt="Logo" />
                <span className="navbar__text"> Forms</span>
            </a>
        </div>;
    }
}


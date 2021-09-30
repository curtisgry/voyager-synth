import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import { centerAbsolute } from '../utilities';

const Header = () => (
        <AppHeader>
                <img src={logo} alt="logo" className="logo" />
        </AppHeader>
);

const AppHeader = styled.header`
        pointer-events: none;
        width: 100%;
        height: 200px;
        position: relative;
        .logo {
                ${centerAbsolute};
                top: 50%;
        }
`;

export default Header;

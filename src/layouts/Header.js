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
        height: 140px;
        position: relative;
        .logo {
                ${centerAbsolute};
                top: 60%;
        }
        @media (max-width: 1200px) {
                height: 100px;
                .logo {
                        ${centerAbsolute};
                        top: 70%;
                }
        }
`;

export default Header;

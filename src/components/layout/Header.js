import React from 'react';

import { AppHeader } from '../../elements';
import logo from '../../logo.png';

const Header = () => (
        <AppHeader>
                <img src={logo} alt="logo" className="logo" />
        </AppHeader>
);

export default Header;

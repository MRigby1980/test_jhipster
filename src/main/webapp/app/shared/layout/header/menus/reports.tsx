import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';

import { NavDropdown } from '../header-components';

const reportMenuItemsAuthenticated = (
    <>
        <DropdownItem tag={Link} to="/reports/studentReport">
            <FontAwesomeIcon icon="wrench" fixedWidth /> Settings
        </DropdownItem>
    </>
);

const reportMenuItems = (
    <>
        <DropdownItem id="studentReport" tag={Link} to="/reports/studentReport">
            <FontAwesomeIcon icon="sign-in-alt" fixedWidth /> Student Report
        </DropdownItem>
    </>
);

export const ReportMenu = ({ isAuthenticated = false }) => (
    <NavDropdown icon="book" name="Reports" id="report-menu">
        {isAuthenticated ? reportMenuItemsAuthenticated : reportMenuItems}
    </NavDropdown>
);

export default ReportMenu;

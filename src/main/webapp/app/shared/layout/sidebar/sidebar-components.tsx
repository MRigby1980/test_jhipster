import React from 'react';
import './sidebar.css';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, NavItem, NavLink, NavbarBrand, DropdownItem, Button, Collapse, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';
import {getSession} from "app/shared/reducers/authentication";
import {connect} from "react-redux";

export const NavDropdown = props => (
    <UncontrolledDropdown nav inNavbar id={props.id}>
        <DropdownToggle nav caret className="d-flex align-items-center">
            <FontAwesomeIcon icon={props.icon} style={{color: "#ffffff"}}/>
            <span style={{color: "#ffffff", fontWeight: "normal", paddingLeft: "5px"}}>{props.name}</span>
        </DropdownToggle>
        <DropdownMenu right style={props.style}>
            {props.children}
        </DropdownMenu>
    </UncontrolledDropdown>
);

export const BrandIcon = props => (
    <div {...props} className="brand-icon">
        <img src="content/images/logo-jhipster.png" alt="Logo" />
    </div>
);

export const Brand = props => (
    <NavbarBrand tag={Link} to="/" className="brand-logo">
        {/*<BrandIcon />*/}
        <span className="brand-title">Test_jhipster</span>
        {/*<span className="navbar-version">{appConfig.VERSION}</span>*/}
    </NavbarBrand>
);

export const Home = props => (
    <NavItem>
        <NavLink tag={Link} to="/" className="d-flex align-items-center">
            <FontAwesomeIcon icon="home" style={{color: "#ffffff"}}/>
            <span style={{color: "#ffffff", fontWeight: "normal", paddingLeft: "5px"}}>Home</span>
        </NavLink>
    </NavItem>
);

const reportMenuItemsAuthenticated = (
    <>
        <ListGroupItem className="list-group-item-sidebar" tag={Link} to="/reports/students">
            <FontAwesomeIcon icon="wrench" fixedWidth /> Settings
        </ListGroupItem>
    </>
);

const reportMenuItems = (
    <>
        <ListGroupItem className="list-group-item-sidebar" id="studentReport" tag={Link} to="/reports/students">
            <FontAwesomeIcon icon="sign-in-alt" fixedWidth /> Student Report
        </ListGroupItem>
    </>
);

export const ReportMenu = ({ isAuthenticated = false }) => (

    <ListGroup name="Reports" id="report-menu" style={{color: "#ffffff", backgroundColor: "#db3d44", fontSize: "12px", marginLeft: "25px"}}>
        {isAuthenticated ? reportMenuItemsAuthenticated : reportMenuItems}
        </ListGroup>
);

export const EntitiesMenu = props => (
    // tslint:disable-next-line:jsx-self-close
    <NavDropdown icon="th-list" name="Entities" id="entity-menu">
        {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </NavDropdown>
);

const adminMenuItems = (
    <>
        <DropdownItem tag={Link} to="/admin/user-management">
            <FontAwesomeIcon icon="user" fixedWidth /> User management
        </DropdownItem>
        <DropdownItem tag={Link} to="/admin/metrics">
            <FontAwesomeIcon icon="tachometer-alt" fixedWidth /> Metrics
        </DropdownItem>
        <DropdownItem tag={Link} to="/admin/health">
            <FontAwesomeIcon icon="heart" fixedWidth /> Health
        </DropdownItem>
        <DropdownItem tag={Link} to="/admin/configuration">
            <FontAwesomeIcon icon="list" fixedWidth /> Configuration
        </DropdownItem>
        <DropdownItem tag={Link} to="/admin/audits">
            <FontAwesomeIcon icon="bell" fixedWidth /> Audits
        </DropdownItem>
        {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
        <DropdownItem tag={Link} to="/admin/logs">
            <FontAwesomeIcon icon="tasks" fixedWidth /> Logs
        </DropdownItem>
    </>
);

const swaggerItem = (
    <DropdownItem tag={Link} to="/admin/docs">
        <FontAwesomeIcon icon="book" fixedWidth /> API
    </DropdownItem>
);

export const AdminMenu = ({ showSwagger }) => (
    <NavDropdown icon="user-plus" name="Administration" id="admin-menu">
        {adminMenuItems}
        {showSwagger && swaggerItem}
    </NavDropdown>
);

const accountMenuItemsAuthenticated = (
    <>
        <DropdownItem tag={Link} to="/account/settings">
            <FontAwesomeIcon icon="wrench" fixedWidth /> Settings
        </DropdownItem>
        <DropdownItem tag={Link} to="/account/password">
            <FontAwesomeIcon icon="clock" fixedWidth /> Password
        </DropdownItem>
        <DropdownItem tag={Link} to="/logout">
            <FontAwesomeIcon icon="sign-out-alt" fixedWidth /> Sign out
        </DropdownItem>
    </>
);

const accountMenuItems = (
    <>
        <DropdownItem id="login-item" tag={Link} to="/login">
            <FontAwesomeIcon icon="sign-in-alt" fixedWidth /> Sign in
        </DropdownItem>
        <DropdownItem tag={Link} to="/register">
            <FontAwesomeIcon icon="sign-in-alt" fixedWidth /> Register
        </DropdownItem>
    </>
);

export const AccountMenu = ({ isAuthenticated = false }) => (
    <NavDropdown icon="user" name="Account" id="account-menu">
        {isAuthenticated ? accountMenuItemsAuthenticated : accountMenuItems}
    </NavDropdown>
);

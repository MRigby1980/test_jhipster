import './header.css';

import React from 'react';

import { Navbar, Nav, NavbarToggler, NavbarBrand, NavItem, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink, NavLink as Link} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import {Home, Brand, NavDropdown} from './header-components';
import {AdminMenu, EntitiesMenu, AccountMenu, ReportMenu} from './menus';
import authentication, {getSession} from 'app/shared/reducers/authentication';


import {connect} from "react-redux";
import {SideBar} from "app/shared/layout/sidebar/sidebar";

export interface IHeaderProps extends StateProps, DispatchProps {}

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isSwaggerEnabled: boolean;
}

export interface IHeaderState {
  menuOpen: boolean;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

    componentDidMount() {
        this.props.getSession();
    }

  render() {
    const { isAuthenticated, isAdmin, isSwaggerEnabled, getSession } = this.props;

    const { account } = this.props;

    return (
      <div id="app-header">
        <LoadingBar className="loading-bar" />
        <Navbar dark expand="sm" fixed="top" className="jh-navbar">
          <NavbarToggler aria-label="Menu" onClick={this.toggleMenu} />
          <Brand />
          <Collapse isOpen={this.state.menuOpen} navbar>
            <Nav id="header-tabs" className="ml-auto" navbar>
                <NavItem className="d-flex align-items-center">
                    <span style={{color: "white"}}>{ account.login }</span>
                </NavItem>
              <Home />
                {isAuthenticated && <ReportMenu />}
              {isAuthenticated && <EntitiesMenu />}
              {isAuthenticated && isAdmin && <AdminMenu showSwagger={isSwaggerEnabled} />}
              <AccountMenu isAuthenticated={isAuthenticated} />
            </Nav>
          </Collapse>
        </Navbar>

          <SideBar isAuthenticated={isAuthenticated} isAdmin={isAdmin} isSwaggerEnabled={isSwaggerEnabled} account={account} getSession={getSession} />

      </div>
    );
  }
}

const mapStateToProps = storeState => ({
    account: storeState.authentication.account,
    isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

import './sidebar.css';

import React from 'react';

import { Navbar, Nav, NavbarToggler, NavbarBrand, NavItem, Collapse, Button, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideNav, { Toggle, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {NavLink, NavLink as Link} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { Home, Brand, ReportMenu, EntitiesMenu, AdminMenu, AccountMenu } from './sidebar-components';
// import {AccountMenu} from './menus';
import authentication, {getSession} from 'app/shared/reducers/authentication';

import {connect} from "react-redux";

export interface ISideBarProps extends StateProps, DispatchProps {}

export interface ISideBarProps {
    isAuthenticated: boolean;
    isAdmin: boolean;
    // ribbonEnv: string;
    // isInProduction: boolean;
    isSwaggerEnabled: boolean;
}

export interface ISideBarState {
    menuOpen: boolean;
    collapse: boolean;
    buttonHoverColor: string;
}

export class SideBar extends React.Component<ISideBarProps, ISideBarState> {
    state: ISideBarState = {
        menuOpen: false,
        collapse: false,
        buttonHoverColor: "#db3d44",
    };

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    componentDidMount() {
        this.props.getSession();
    }

    mouseEnter = (e) => {
        this.setState({buttonHoverColor: "#ac2027" });
    }

    mouseLeave = (e) => {
        this.setState({buttonHoverColor: "#db3d44" });
    }

    render() {
        const { isAuthenticated, isAdmin, isSwaggerEnabled } = this.props;

        const { account } = this.props;

        return (
            <div style={{position: "absolute", backgroundColor: "#db3d44", color: "#ffffff", width: "250px", paddingRight: "15px", top: "60px", bottom: "0"}}>

                <Nav vertical>
                    <NavItem className="nav-item-sidebar" style={{marginTop: "15px"}}>
                        <Home />
                    </NavItem>
                    <NavItem>
                        <Button className="btn-sidebar" onClick={this.toggle} style={{ marginBottom: '1rem', width: "100%", color: "#ffffff", outline: "none", border: "none", textAlign: "left" }}><FontAwesomeIcon icon="book" fixedWidth /><span style={{paddingLeft: "5px"}}>Reports</span></Button>
                        <Collapse isOpen={this.state.collapse}>
                            <ReportMenu />
                        </Collapse>
                    </NavItem>
                </Nav>
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
)(SideBar);


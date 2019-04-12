import './sidebar.css';

import React from 'react';

import { Navbar, Nav, NavbarToggler, NavbarBrand, NavItem, Collapse, UncontrolledCollapse, Button, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideNav, { Toggle, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {NavLink, NavLink as Link} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { Home, Brand, ReportMenu, EntitiesMenu, AdminMenu, AccountMenu } from './sidebar-components';
// import {AccountMenu} from './menus';
import authentication, {getSession} from 'app/shared/reducers/authentication';

import {connect} from "react-redux";
import ErrorBoundary from "app/shared/error/error-boundary";
import AppRoutes from "app/routes";
import Footer from "app/shared/layout/footer/footer";

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
    bodyPadding: string;
    menuWidth: string;
    navItemsDisplay: string;
}

export class SideBar extends React.Component<ISideBarProps, ISideBarState> {
    state: ISideBarState = {
        menuOpen: true,
        bodyPadding: "265px",
        menuWidth: "250px",
        navItemsDisplay: "inline-block",
    };

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });

        if(this.state.menuOpen == true) {
            this.state.menuWidth = "250px";
            this.state.bodyPadding = "265px";
            this.state.navItemsDisplay = "inline-block";
        }
        else {
            this.state.menuWidth = "50px";
            this.state.bodyPadding = "65px";
            this.state.navItemsDisplay = "none";
        }
    };

    componentDidMount() {
        this.props.getSession();

        if(this.state.menuOpen == true) {
            this.state.menuWidth = "250px";
            this.state.bodyPadding = "265px";
            this.state.navItemsDisplay = "inline-block";
        }
        else {
            this.state.menuWidth = "50px";
            this.state.bodyPadding = "65px";
            this.state.navItemsDisplay = "none";
        }
    }

    render() {
        const { isAuthenticated, isAdmin, isSwaggerEnabled } = this.props;

        const { account } = this.props;

        return (
            <div>
                <div style={{position: "fixed", backgroundColor: "#db3d44", color: "#ffffff", width: this.state.menuWidth, paddingRight: "15px", top: "0", bottom: "0", left: "0", height: "100vh", zIndex: 999, transition: "all 0.3s"}}>

                    <Nav vertical>
                        <span onClick={this.toggleMenu}><FontAwesomeIcon icon="bars" fixedWidth style={{marginLeft: "15px", marginTop: "75px"}} /></span>

                        <NavItem className="nav-item-sidebar" style={{marginTop: "10px", display: this.state.navItemsDisplay}}>
                            <Home />
                        </NavItem>
                        <NavItem style={{marginTop: "10px", display: this.state.navItemsDisplay}}>
                            <Button className="btn-sidebar" id="toggler" style={{ marginBottom: '1rem', width: "100%", color: "#ffffff", textAlign: "left" }}><FontAwesomeIcon icon="book" fixedWidth /><span style={{paddingLeft: "5px"}}>Reports</span></Button>
                            <UncontrolledCollapse toggler="#toggler">
                                <ReportMenu />
                            </UncontrolledCollapse>
                        </NavItem>
                        <NavItem style={{display: this.state.navItemsDisplay}}>
                            <Button className="btn-sidebar" id="toggler2" style={{ marginBottom: '1rem', width: "100%", color: "#ffffff", textAlign: "left" }}><FontAwesomeIcon icon="book" fixedWidth /><span style={{paddingLeft: "5px"}}>Reports</span></Button>
                            <UncontrolledCollapse toggler="#toggler2">
                                <ReportMenu />
                            </UncontrolledCollapse>
                        </NavItem>
                    </Nav>
                </div>

                <div className="container-fluid view-container" id="app-view-container" style={{paddingLeft: this.state.bodyPadding}}>
                    <Card className="jh-card">
                        <ErrorBoundary>
                            <AppRoutes />
                        </ErrorBoundary>
                    </Card>

                    <Footer />
                </div>
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


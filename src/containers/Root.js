import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

import configureStore from '../store/configureStore';
import Home from '../components/Home';
import Author from '../components/Author';
import i18n from '../i18n';

const store = configureStore();

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavbarOpen: false
    }
  }

  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  }

  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Fragment>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                  Test React Redux
                </NavbarBrand>
                <NavbarToggler onClick={() => { this.toggleNavbar() }} />
                <Collapse isOpen={this.state.isNavbarOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/author">Author</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/author" component={Author} />
                <Redirect to="/" />
              </Switch>
            </Fragment>
          </Router>
        </I18nextProvider>
      </Provider>
    );
  }
};

import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import LoginForm from "./Login";

class AppNavbar extends Component {

  // Optional -> put constructor 3 - 18:18
  state = {
    isOpen: false
  };

  // don't have to bind this to arrow functions
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
		  <Container>
			  <LoginForm/>
		  </Container>
        <Navbar color="dark" dark expand="sm" className="mb-5">


			<Container>

            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/catalinmoraru/LearnMERN.git">
                    Github Repo
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;

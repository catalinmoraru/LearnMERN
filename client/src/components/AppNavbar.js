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
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {deleteItem, getItems} from "../actions/itemActions";

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
	  const loginSuccessful = this.props.loginSuccessful;

	if (loginSuccessful) {
    return (
		<div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
			<Container>
            <NavbarBrand href="/">TO DO List</NavbarBrand>
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
	else {
		return(
			<div></div>
		);
	}
  }
}

const mapStateToProps = state => ({
	item: state.item,
	loginSuccessful: state.item.loginSuccessful
});

export default connect(
	mapStateToProps,
	{ getItems, deleteItem }
)(AppNavbar);


// export default AppNavbar;

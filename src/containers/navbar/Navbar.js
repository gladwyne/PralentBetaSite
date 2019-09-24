import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="white" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">
            <p
              className="font-weight-bold mb-0 text-dark"
              style={{ fontSize: "1.75rem" }}
            >
              pralent
              <sup className="text-primary" style={{ fontSize: "0.85rem" }}>
                {" "}
                BETA
              </sup>
            </p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="border-0" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ fontSize: "0.9rem" }}>
              {/* <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/">
                  Students
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/recruiters">
                  Recruiters
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem> */}
              <NavItem className="mx-md-2">
                <Button
                  className="shadow my-auto px-4 py-2 bg-primary"
                  style={{
                    fontSize: "0.8rem",
                    borderRadius: "5px",
                    fontWeight: "700"
                  }}
                  size="sm"
                  tag={Link}
                  to="/signup"
                >
                  Sign Up for Beta <IoMdRocket style={{ fontSize: "16px" }} />
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

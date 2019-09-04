import React from "react";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";
import { Container, Row, Col, Button, NavbarBrand } from "reactstrap";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="font-small bg-light">
      <Container className="pb-5 pt-3">
        <div className="text-center">
          <NavbarBrand tag={Link} to="/" className="text-dark">
            <p
              className="font-weight-bold mb-0"
              style={{ fontSize: "1.75rem" }}
            >
              pralent
            </p>
            <p style={{ fontSize: "0.8rem" }}>Practical learning platform.</p>
          </NavbarBrand>
          <Row>
            <Col>
              <Button
                tag={Link}
                to="/signup"
                color="primary"
                className="py-2"
                size="lg"
                style={{
                  boxShadow: "0 0 20px 7px rgba(55,122,235,0.1)",
                  fontSize: "1.1rem",
                  fontWeight: "600"
                }}
              >
                Sign Up for the Beta <IoMdRocket className="mx-1 my-auto" />
              </Button>{" "}
              <div className="mt-3">
                <small>Copyright © {year} Pralent. All rights reserved.</small>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

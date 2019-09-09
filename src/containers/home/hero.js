import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/main-right.svg";
import { IoMdRocket } from "react-icons/io";

function Hero() {
  return (
    <div className="py-md-5 text-md-left text-center">
      <Container className="pt-md-5 pt-3">
        <Row className="h-100 py-md-5">
          <Col md="7">
            <div className="pb-sm-4">
              <h1
                style={{
                  lineHeight: "1.1",
                  fontSize: "2.9rem",
                  fontWeight: "800"
                }}
                className="text-dark"
              >
                Pralent is the practical talent platform of the future.
              </h1>
              <p className="lead pt-2">
                Build your portfolio, gain real practical skills, win prizes and
                land that dream internship today!
              </p>
            </div>
            <Button
              tag={Link}
              to="/signup"
              color="primary"
              className="btn-block py-2"
              size="lg"
              style={{
                boxShadow: "0 0 20px 7px rgba(55,122,235,0.25)",
                fontSize: "1.1rem",
                fontWeight: "600"
              }}
            >
              Sign Up for the Beta <IoMdRocket className="mx-1 my-auto" />
            </Button>
          </Col>
          <Col md="5" className="my-auto">
            <img
              src={HeroImg}
              alt="hero-img"
              className="mx-auto d-block w-75 mt-md-n5"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;

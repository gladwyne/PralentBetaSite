import React from "react";
import { Container, Row, Col } from "reactstrap";

import profile_hero from "../../assets/images/profile_hero.png";

const Profile = () => {
  return (
    <div className="bg-white py-md-5">
      <Container>
        <Row>
          <Col md="6" className="my-auto py-5 py-md-0 order-2 order-md-1">
            <h1 className="font-weight-bold text-dark">
              Customize your profile to focus on what matters most.
            </h1>
            <p className="lead">
              We want to help you stand out based on the skills you have and the
              projects you've created. Take advantage of our platform to create
              that awesome profile.
            </p>
          </Col>
          <Col md="6" className="order-1 order-md-2">
            <img
              src={profile_hero}
              alt="profile_hero"
              className="shadow"
              width="100%"
              height="auto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

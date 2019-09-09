import React from "react";
import { Container, Row, Col } from "reactstrap";

import profiles from "../../assets/images/profiles.png";

const Connect = () => {
  return (
    <div className="bg-white py-md-5">
      <Container>
        <Row>
          <Col md="6" className="my-auto py-5 py-md-0 order-2 order-md-1">
            <h1 className="font-weight-extrabold text-dark">
              Connect with other students.
            </h1>
            <p className="lead">
              Utilize our messaging platform and connect with other students
              with your same interests. Work together on a project or simply
              message someone asking a question.
            </p>
          </Col>
          <Col md="6" className="order-1 order-md-2">
            <img
              src={profiles}
              alt="profiles"
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

export default Connect;

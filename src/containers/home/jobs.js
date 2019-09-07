import React from "react";
import { Container, Row, Col } from "reactstrap";

import student_information from "../../assets/images/student_information.png";

const Jobs = () => {
  return (
    <div className="bg-white py-md-5">
      <Container>
        <Row>
          <Col md="6">
            <img
              src={student_information}
              alt="student_information"
              className="shadow"
              width="100%"
              height="auto"
            />
          </Col>
          <Col md="6" className="my-auto py-5 py-md-0">
            <h1 className="font-weight-bold text-dark">
              Land your dream internship today.
            </h1>
            <p className="lead">
              No more external submissions. At Pralent, your profile is your
              submission, saving you time and helping you get back to learning.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;

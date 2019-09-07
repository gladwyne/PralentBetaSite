import React from "react";
import { Container, Row, Col } from "reactstrap";

import project_posts from "../../assets/images/project_posts.png";

const Project = () => {
  return (
    <div className="bg-white py-md-5">
      <Container>
        <Row>
          <Col md="6">
            <img
              src={project_posts}
              alt="project_posts"
              className="shadow"
              width="100%"
              height="auto"
            />
          </Col>
          <Col md="6" className="my-auto py-5 py-md-0">
            <h1 className="font-weight-bold text-dark">
              Post about your projects to the community.
            </h1>
            <p className="lead">
              View projects by students and get inspired to work on your own.
              Get real feedback and showcase your skills to potential
              recruiters.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;

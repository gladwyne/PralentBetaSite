import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const Signup = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <Container className="text-center py-5">
          <Row>
            <Col>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe3G1RJWi6T9dGfTsJWATGuuz7VgDXKHAkYfZqPJjMJXivp3A/viewform?embedded=true"
                width="100%"
                height="1275"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="beta_signup"
              >
                Loading…
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Signup;

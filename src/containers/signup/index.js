import React, { Fragment } from "react";
import { Container } from "reactstrap";

const Signup = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <Container className="text-center py-md-5">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe3G1RJWi6T9dGfTsJWATGuuz7VgDXKHAkYfZqPJjMJXivp3A/viewform?embedded=true"
            width="1000"
            height="1307"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="beta_signup"
          >
            Loading…
          </iframe>
        </Container>
      </div>
    </Fragment>
  );
};

export default Signup;

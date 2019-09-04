import React from "react";
import undraw_business_deal_cpi9 from "../../assets/images/undraw_business_deal_cpi9.svg";
import undraw_job_hunt_byf9 from "../../assets/images/undraw_job_hunt_byf9.svg";
import undraw_make_it_rain_iwk4 from "../../assets/images/undraw_make_it_rain_iwk4.svg";
import undraw_maker_launch_crhe from "../../assets/images/undraw_maker_launch_crhe.svg";

import { Row, Col, Container } from "reactstrap";

export default function aboutCompetition() {
  return (
    <div className="py-5">
      <Container>
        <Row className="py-5 text-center">
          <Col>
            <h1 className="py-2 font-weight-bold">
              Gain practical skills through online challenges.
            </h1>
            <p className="lead">
              Gone are the days of wasting your time with theoretical classes.
              Participate in real challenges from top companies, and gain
              practical skills to impress potential employers. Oh yeah, you can
              win some prizes while you are at it!
            </p>
          </Col>
        </Row>

        <Row className="pb-5 pt-2">
          <Col md="3">
            <div>
              <img src={undraw_job_hunt_byf9} alt="Job Hunt" className="w-75" />
              <h3 className="font-weight-bold py-md-2">Real Skills.</h3>

              <p>
                All of our challenges are vetted to make sure that student's are
                not wasting their time. We ensure that you are gaining the
                skills necessary to boost your career.
              </p>
            </div>
          </Col>

          <Col md="3">
            <div>
              <img
                src={undraw_maker_launch_crhe}
                alt="Build Projects"
                className="w-75"
              />
              <h3 className="font-weight-bold py-md-2">Build Projects.</h3>
              <p>
                Participating in our challenges will allow you to build real
                projects for companies. By the end you will have an entire
                portfolio of projects to showcase at your next interview.
              </p>
            </div>
          </Col>
          <Col md="3">
            <div>
              <img
                src={undraw_make_it_rain_iwk4}
                alt="Win Prizes"
                className="w-75"
              />
              <h3 className="font-weight-bold py-md-2">Win Prizes.</h3>
              <p>
                Cash out directly to your bank account to pay for school,
                student loans, or that new gift you've been saving up to buy.
              </p>
            </div>
          </Col>
          <Col md="3">
            <div>
              <img
                src={undraw_business_deal_cpi9}
                alt="Get Hired"
                className="w-75"
              />
              <h3 className="font-weight-bold py-md-2">Get Hired.</h3>

              <p>
                Showcase your skills and portfolio of new projects to potential
                employers, and get hired at your favorite company.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

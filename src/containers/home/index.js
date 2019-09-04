import React, { Fragment } from "react";
// Sections
import Hero from "./hero";
import AboutChallenges from "./aboutChallenges";
import Project from "./project";
import Jobs from "./jobs";
import Profile from "./profile";
import Connect from "./connect";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Project />
      <Profile />
      <Jobs />
      <Connect />
      <AboutChallenges />
    </Fragment>
  );
}

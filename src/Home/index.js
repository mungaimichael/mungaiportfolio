import React, { useState } from "react";
import Header from "../Header";
import Hero from "../Hero";
import NavAside from "../NavAside";
import { StyledHomeContainer } from "./Home.Elements";

const Homepage = () => {
  const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
      <StyledHomeContainer>
        <Header setburgerStatus={setburgerStatus} burgerStatus={burgerStatus} />
        <Hero />
        <NavAside burgerStatus={burgerStatus} />
      </StyledHomeContainer>
    </>
  );
};

export default Homepage;

// <>{burgerStatus ? <NavAside burgerStatus={burgerStatus} /> : null}</>;

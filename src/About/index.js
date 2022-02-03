import React from "react";
import { StyledSectionTitle } from "../Projects/Projects.Elements";
import {
  StyledAboutContainer,
  StyledaTextImgContainer,
  StyledImgContainer,
  StyledText,
  StyledTextContainer,
} from "./About.Elements";

import one from "./codeSnippets/one.png";
import two from "./codeSnippets/two.png";

import three from "./codeSnippets/three.png";

const About = () => {
  return (
    <>
      <StyledAboutContainer>
        <StyledSectionTitle>about myself</StyledSectionTitle>
        <StyledaTextImgContainer>
          <StyledTextContainer>
            <StyledText>
              I’m a Kenyan Bsc university student currently in my third year.{" "}
              <br /> I started my self taught coding journey an year ago with
              the help of <span>youtube</span> and countless hours of reading{" "}
              <br />
              <span>documentations</span>. <br /> I strive everyday to be a
              better version of myself in my studies and my coding
            </StyledText>
          </StyledTextContainer>
          <StyledImgContainer>
            <img src={one} alt="" id="one" />
            <img src={two} alt="" id="two" />
            <img src={three} alt="" id="three" />
          </StyledImgContainer>
        </StyledaTextImgContainer>
      </StyledAboutContainer>
    </>
  );
};

export default About;

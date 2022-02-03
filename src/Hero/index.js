import React from "react";
import {
  StyledTopImgContainer,
  StyledBottomImgContainer,
  StyledHeroContainer,
  StyledHeroDiv,
  StyledHeroImgContainer,
  StyledHeroText,
} from "./Hero.Elements";
import one from "./HeroImages/one.png";
import two from "./HeroImages/two.png";
import jsx from "./HeroImages/jsx.png";

const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroDiv>
        <StyledHeroText>Front End Developer</StyledHeroText>
        <h3>just a guy in love with web development</h3>
      </StyledHeroDiv>
      <StyledHeroDiv>
        <StyledHeroImgContainer>
          <StyledTopImgContainer>
            <img src={jsx} alt="" />
            <img src={two} alt="" />
          </StyledTopImgContainer>
          <StyledBottomImgContainer>
            <img src={one} alt="" />
          </StyledBottomImgContainer>
        </StyledHeroImgContainer>
      </StyledHeroDiv>
    </StyledHeroContainer>
  );
};

export default Hero;

import React from "react";
import {
  StyledImgContainer,
  StyledProjects,
  StyledProjectsContainer,
  StyledSectionTitle,
} from "./Projects.Elements";
import mungaitv from "./sites/mungaitv.png";
import crazyburgers from "./sites/crazyburgers.png";
import travelsite from "./sites/travelsite.png";

const Projects = () => {
  return (
    <StyledProjectsContainer>
      <StyledSectionTitle>some of my work</StyledSectionTitle>
      <StyledProjects>
        <StyledImgContainer>
          <img src={mungaitv} alt="" />
        </StyledImgContainer>
        <StyledImgContainer>
          <img src={crazyburgers} alt="" />
        </StyledImgContainer>
        <StyledImgContainer>
          <img src={travelsite} alt="" />
        </StyledImgContainer>
      </StyledProjects>
    </StyledProjectsContainer>
  );
};

export default Projects;

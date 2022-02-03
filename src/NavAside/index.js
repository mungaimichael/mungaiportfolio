import React from "react";
import github from "./SocialIcons/github.png";
import gmail from "./SocialIcons/gmail.png";

import {
  StyledAsideDivs,
  StyledAsideList,
  StyledLink,
  StyledListItem,
  StyledNavWrapper,
  StyledSocialIcon,
} from "./Aside.Elements";

const NavAside = ({ burgerStatus }) => {
  return (
    <StyledNavWrapper burgerStatus={burgerStatus}>
      <StyledAsideDivs>
        <h1>talk to me</h1>
        <StyledAsideList>
          <StyledListItem>
            <StyledLink
              to={{ pathname: "https://github.com/mungaimichael" }}
              target="_blank"
            >
              <StyledSocialIcon src={github} alt="" />
              <h4>mungai michael</h4>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledSocialIcon src={gmail} alt="" />
            <h5>mungaimichael@gmail.com</h5>
          </StyledListItem>
        </StyledAsideList>
      </StyledAsideDivs>
      <StyledAsideDivs>
        <h1>Projects</h1>
        <StyledAsideList>
          <StyledListItem>
            <StyledLink
              to={{ pathname: "https://mungaitv-v2.netlify.app/" }}
              target="_blank"
            >
              mungaitv
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to={{ pathname: "https://crazyburgers.netlify.app/" }}
              target="_blank"
            >
              crazyburgers
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to={{ pathname: "https://reacttravelsite.netlify.app/" }}
              target="_blank"
            >
              travelsite
            </StyledLink>
          </StyledListItem>
        </StyledAsideList>
      </StyledAsideDivs>
    </StyledNavWrapper>
  );
};

export default NavAside;

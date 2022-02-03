import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledNavWrapper = styled.div`
  height: 100%;
  width: 55%;
  position: absolute;
  background: #ecb365;
  transform: ${({ burgerStatus }) =>
    burgerStatus ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  transition: transform 0.3s cubic-bezier(1, 1.07, 0.32, 1.28);
  right: 0;
`;

export const StyledAsideDivs = styled.div`
  width: 100%;
  height: 25%;
  position: relative;
  top: 100px;

  h1 {
    font-family: Montserrat;
    font-weight: 900;
    text-decoration: 4px underline black;
  }
`;

export const StyledAsideList = styled.ul`
  height: 75%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledListItem = styled.li`
  list-style: none;
  margin: 0.4rem 0;
  padding: 0 1.2rem;
`;
export const StyledLink = styled(Link)`
  font-family: Montserrat;
  font-size: clamp(1.4rem, 2.5vw, 3rem);
  text-decoration: none;
  font-weight: 900;
  color: black;

  :hover {
    color: white;
    cursor: pointer;
  }

  h4 {
    font-family: Poppins;
    font-size: 0.8rem;
  }
`;
export const StyledSocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

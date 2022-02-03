import styled from "styled-components";

import { StyledLink } from "../NavAside/Aside.Elements";

export const StyledHeader = styled.header`
  height: 120px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledTitle = styled.h1`
  font-family: Montserrat;
  color: white;
  font-weight: 900;
  width: 80px;
  padding: 0 1rem;
  span {
    color: #ecb365;
  }
`;

export const StyledBurgerIcon = styled.div`
  width: 30px;
  height: 30px;
  padding-right: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  img {
    height: inherit;
    widht: inherit;
    position: absolute;
    z-index: 1000;
  }
`;

export const StyledDeskNav = styled.ul`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledDeskNavItem = styled(StyledLink)`
  font-size: 20px;
  color: white;

  span {
    color: #ecb365;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

import React, { useState, useEffect } from "react";
import {
  StyledHeader,
  StyledTitle,
  StyledBurgerIcon,
  StyledDeskNav,
  StyledDeskNavItem,
} from "./Header.Elements";
import burger from "./burger.svg";
import close from "./close.svg";
import github from "../NavAside/SocialIcons/github.png";
const Header = ({ setburgerStatus, burgerStatus }) => {
  const [showBurger, setshowBurger] = useState(false);

  const handleBurgerClick = () => {
    setburgerStatus(!burgerStatus);
  };
  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setshowBurger(true);
    } else {
      setshowBurger(false);
    }
  };
  window.addEventListener("resize", handleResize, false);

  useEffect(() => handleResize(), []);
  return (
    <StyledHeader>
      <StyledTitle>
        mungai <span>michael.</span>
      </StyledTitle>
      {showBurger ? (
        <StyledBurgerIcon onClick={handleBurgerClick}>
          <>
            {burgerStatus ? (
              <img src={close} alt="" />
            ) : (
              <img src={burger} alt="" />
            )}
          </>
        </StyledBurgerIcon>
      ) : (
        <StyledDeskNav>
          <StyledDeskNavItem
            to={{ pathname: "https://github.com/mungaimichael" }}
            target="_blank"
          >
            <img src={github} alt="" />
          </StyledDeskNavItem>
          <StyledDeskNavItem
            to={{ pathname: "https://mungaitv-v2.netlify.app/" }}
            target="_blank"
          >
            mungai <span>tv</span>
          </StyledDeskNavItem>
          <StyledDeskNavItem
            to={{ pathname: "https://crazyburgers.netlify.app/" }}
            target="_blank"
          >
            <span>crazy</span>burgers
          </StyledDeskNavItem>
          <StyledDeskNavItem
            to={{ pathname: "https://reacttravelsite.netlify.app/" }}
            target="_blank"
          >
            travel <span>site</span>
          </StyledDeskNavItem>
        </StyledDeskNav>
      )}
    </StyledHeader>
  );
};

export default Header;

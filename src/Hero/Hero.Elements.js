import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const StyledHeroDiv = styled.div`
  background: white;
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 55vh;
  margin-top: 2rem;
  background: black;

  h3 {
    color: white;
    font-family: Poppins;
    font-size: clamp(1rem, 1.5vw, 2rem);
    padding: 0 0.2rem;
  }
`;
export const StyledHeroText = styled.h1`
  font-family: Montserrat;
  font-size: clamp(4rem, 5.8vw, 7.5rem);
  color: #ecb365;
  font-weight: 900;
  width: 80%;
  text-decoration: 4px underline #ecb365;
`;

export const StyledHeroImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;

  @media (max-width: 376px) {
    height: 110px;
    width: 300px;
    margin: 0 auto;
  }
`;

export const StyledTopImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background: #ecb365;

  img {
    width: 200px;
    height: 85%;
    padding: 1rem;
  }
`;

export const StyledBottomImgContainer = styled(StyledTopImgContainer)`
  img {
    width: 250px;
  }
`;

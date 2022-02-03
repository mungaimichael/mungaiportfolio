import styled from "styled-components";
export const StyledAboutContainer = styled.div`
  widht: 100%;
  height: 100vh;
  background: black;
`;

export const StyledaTextImgContainer = styled.div`
  height: 79vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 2rem;
`;
export const StyledTextContainer = styled.div`
  height: 280px;
  width: 600px;
  background: cyan;
`;

export const StyledText = styled.h2`
  font-family: Montserrat;
  font-weight: 900;
  font-size: clamp(1.1rem, 2vw, 3.2rem);
  color: white;
  background: black;
  padding: 2rem;
  height: 100%;
  width: 100%;

  span {
    font-size: clamp(1.5rem, 2.1vw, 3.3rem);
    color: #ecb365;
    text-transform: uppercase;
  }
`;
export const StyledImgContainer = styled(StyledTextContainer)`
  background: black;
  height: 400px;
  width: 400px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  outline: 1px solid #ecb365;

  #one {
    grid-column: 1/8;
    grid-row: 1/6;
  }
  #two {
    grid-column: 6/11;
    grid-row: 1/6;
  }
  #three {
    grid-column: 1/11;
    grid-row: 6/11;
  }
  img {
    width: 100%;
    height: 100%;
    filter: opacity(0.6);
  }
  @media (min-width: 1280px) {
    height: 550px;
    width: 720px;
  }
  @media (max-width: 376px) {
    height: 150px;
    width: 300px;
  }
`;

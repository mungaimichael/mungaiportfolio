import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
  min-height: 120vh;
  width: 100%;
  background: black;
`;

export const StyledSectionTitle = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  color: white;
  font-size: clamp(2rem, 3.5vw, 6rem);
  width: 100%;
  max-width: 100%;
  height: 150px;
  mzx-height: 100%;
  text-decoration: 5px underline #ecb365;
  padding: 3rem 1.5rem;
`;

export const StyledProjects = styled.div`
  min-height: calc(120vh - 150px);
  background: #ecb365;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
`;

export const StyledImgContainer = styled.div`
  width: 600px;
  height: 48%;
  background: black;
  margin: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    padding: calc(100vw - 1300px) / 2;
    filter: opacity(0.7);
  }

  :hover {
    img {
      filter: opacity(1);
    }
  }
`;

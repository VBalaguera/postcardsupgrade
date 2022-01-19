import styled from "styled-components";
import { devices } from "./mediaQueries";

const InfoCard = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 80%);

  width: 100%;
  height: 10%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.mobileS} {
    font-size: 0.8rem;
  }
  @media ${devices.mobileM} {
    font-size: 1rem;
  }
  @media ${devices.mobileL} {
    font-size: 0.9rem;
  }
  @media ${devices.tablet} {
    font-size: 1.2rem;
  }
  @media ${devices.laptop} {
    font-size: 1.4rem;
  }
  @media ${devices.laptopL} {
    font-size: 1.4rem;
  }
  @media ${devices.desktop} {
    font-size: 2rem;
  }
`;

export default InfoCard;

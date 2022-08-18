import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as BarSolid } from "../../assets/bars-solid.svg";
import { ReactComponent as XmarkSolid } from "../../assets/xmark-solid.svg";

export const NavigationContainer = styled.div`
  width: 1000px;
  height: 35px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const TitleContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 25px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1000px) {
    padding-right: 25px;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const HamburgerButton = styled(BarSolid)`
  width: 16px;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const XmarkButton = styled(XmarkSolid)`
  width: 16px;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: ce;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <li>Menu</li>
    </NavContainer>
  );
};

export default NavBar;

import styled from "styled-components";

const StyledSpinner = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: black;
  z-index: 999;
  .loader {
    position: relative;
    z-index: 1000;
  }
`;

export { StyledSpinner };

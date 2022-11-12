import styled from "styled-components";

const StyledSettings = styled.section`
  position: absolute;
  top: 40px;
  right: -30%;
  width: 140px;
  margin: auto;
  border-radius: 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.6);
  background: white;
  .settings-item {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.6);
  }
  .settings-text {
    padding: 15px 25px;
    margin: 0;
    font-weight: 600;
    // padding: 3px 0;
    .settings-link {
      display: flex;
      align-items: center;
      font-size: small;
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      .settings-icon {
        margin-right: 8px;
        color: black;
      }
    }
  }
  .settings-text:hover {
    background: #032541;
    .settings-link {
      color: white;
    }
  }
`;

export { StyledSettings };

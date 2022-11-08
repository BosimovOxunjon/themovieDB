import styled from "styled-components";

const StyledSettings = styled.div`
  position: absolute;
  top: 40px;
  right: -30%;
  width: 130px;
  margin: auto;
  border-radius: 4px;
  border: 0.5px solid rgb(133 133 133 / 60%);
  background: white;
  .settings-item {
    border-bottom: 0.5px solid rgb(133 133 133 / 60%);
  }
  .settings-text {
    padding: 10px 15px;
    margin: 0;
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
`;

export { StyledSettings };

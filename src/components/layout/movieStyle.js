import styled from "styled-components";

const StyledMovie = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  .custom_bg {
    background-image: linear-gradient(
      to right,
      rgba(220.5, 220.5, 220.5, 1) 150px,
      rgba(220.5, 220.5, 220.5, 0.84) 100%
    );
  }
  .row {
    display: flex;
    padding-top: 30px;
    .poster_wrapper {
      width: 300px;
      min-width: 300px;
      border-radius: 15px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    h2 {
      font-size: 2.2em;
      margin: 0;
    }
  }
  .info {
    padding-left: 30px;
  }
  .settings {
    display: flex;
    min-height: 50px;
    .settings-item {
      position: relative;
      font-size: large;
      min-width: 60px;
      color: white;
    }
    .settings-item::before {
      content: "";
      position: absolute;
      width: 50px;
      top: -15px;
      height: 50px;
      background: #032541;
      border-radius: 50%;
      left: -15px;
    }
    .settings-icon {
      position: absolute;
      cursor: pointer;
    }
    .settings-text {
      position: absolute;
      visiblity: hidden;
      display: none;
    }
    .settings-item::before + .settings-text {
      dispaly: flex;
      // visiblit
    }
  }
`;

export { StyledMovie };

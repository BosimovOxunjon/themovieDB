import styled from "styled-components";

const StyledPopularMovies = styled.section`
  padding-top: 30px;
  .column-header {
    display: flex;
    align-items: center;
    align-content: center;
    h2 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
      margin-right: 18px;
    }
  }
  .selector {
    display: flex;
    align-items: center;
    padding: 2px;
    border: 1px solid rgb(3, 37, 65);
    border-radius: 25px;
    .selector-item {
      positon: relative;
      z-index: 0;
    }
    .selector-item:last-child {
      padding-left: 10px;
    }
    h3 {
      margin: 0;
      font-size: 14px;
    }
    .selector-link {
      text-decoration: none;
      padding: 0 15px;
      background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .selector-background {
      position: absolute;
      top: 59.5%;
      height: 25px;
      background: blue;
      width: 75px;
      bottom: 114px;
      border-radius: 20px;
      height: 24px;
      background: #032541;
      z-index: -1;
    }
    .selector-background:last-child {
      position: absolute;
      top: 59.5%;
      height: 25px;
      background: blue;
      width: 100px;
      bottom: 114px;
      border-radius: 20px;
      height: 24px;
      background: #032541;
      z-index: -1;
    }
  }
`;

export { StyledPopularMovies };

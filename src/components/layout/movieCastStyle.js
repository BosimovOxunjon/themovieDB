import styled from "styled-components";

const StyledMovieCast = styled.section`
  min-height: 100px;
  background: white;
  .container {
    display: flex;
    padding: 0 50px;
  }
  .row {
    display: grid;
    max-width: 70%;
    flex-wrap: wrap;
  }
  .card_wrapper {
    display: flex;
    padding: 10px 5px;
    min-height: 200px;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    box-shadow: inset -12px -6px 6px 3px #e1e1e1;
  }
  .card {
    width: 140px;
    min-width: 140px;
    min-height: 175px;
    margin-right: 15px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px rgb(0 0 0 / 40%);
    overflow: hidden;
    img {
      width: 100%;
    }
    h4 {
      margin-bottom: 0;
      margin-left: 10px;
    }
    p {
      margin-left: 10px;
      margin-top: 0px;
      font-size: 12px;
    }
  }
  .recommendations {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 10px 0;
    .recommendations_card {
      border-radius: 12px;
      overflow: hidden;
      margin-right: 15px;
      width: 300px;
      min-width: 300px;
      // height: 200px;
      .recommendations_image {
        border-radius: 12px;
        height: 230px;
        overflow: hidden;
      }
      img {
        width: 100%;
      }
      p {
        display: flex;
        span {
          margin-left: auto;
        }
      }
    }
  }
`;

export { StyledMovieCast };

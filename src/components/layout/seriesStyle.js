import styled from "styled-components";

const StyledSeries = styled.section`
  .row {
    display: flex;
    .cast {
      width: 50%;
      .cast_item {
        display: flex;
        margin-bottom: 20px;
        .cast_img {
          min-width: 68px;
          width: 68px;
          height: 68px;
          border-radius: 4px;
          overflow: hidden;
          .cast_img-item {
            width: 100%;
          }
        }
        .cast_link {
          text-decoration: none;
          color: black;
        }
        .cast_info {
          display: flex;
          align-items: center;
          margin-left: 15px;
          h4 {
            margin: 0;
          }
          p {
            margin: 0;
          }
        }
      }
    }
  }
`;

export { StyledSeries };

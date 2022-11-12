import styled from "styled-components";

const StyledPersonalInfo = styled.section`
  .row {
    display: flex;
    margin-top: 40px;
    .content_info {
      width: 40%;
      min-width: 300px;
      .img_wrapper {
        width: 300px;
        min-width: 300px;
        border-radius: 10px;
        overflow: hidden;
        height: 50%;
      }
      img {
        width: 100%;
      }
    }
    .content {
      padding-left: 15px;
    }
  }
`;

export { StyledPersonalInfo };

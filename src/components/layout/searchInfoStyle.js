import styled from "styled-components";

const StyledSearchInfo = styled.section`
  display: flex;
  width: 40%;
  .card {
    display: flex;
    flex-wrap: nowrap !important;
    min-width: 180%;
    width: auto;
    color: black;
    background: white;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 0;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .card_info {
      padding: 0 20px;
      .card_title {
        margin: 15px 0;
      }
    }
    .card_img {
      width: 100px;
      min-width: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .card_link {
    text-decoration: none;
    color: black;
  }
  .card_link:hover {
    text-decoration: none;
    color: blue;
  }
  .options {
    display: none;
  }
`;

export { StyledSearchInfo };

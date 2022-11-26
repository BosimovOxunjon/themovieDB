import styled from "styled-components";

const StyledPeople = styled.section`
  .container {
    padding: 50px;
    padding-top: 30px;
  }
  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 35px 25px;
    .img_wrapper {
      width: 180px;
      min-width: 180px;
      height: 280px;
      min-height: 280px;
      img {
        object-fit: cover;
      }
    }
    .image {
      display: flex;
      border-radius: 10px;
      overflow: hidden;
    }
    border-radius: 4px img {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .card_link {
      text-decoration: none;
      color: black;
    }
    .card_link:hover {
      color: #01b4e4;
    }
  }
`;

export { StyledPeople };

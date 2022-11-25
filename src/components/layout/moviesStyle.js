import styled from "styled-components";

const StyledMovies = styled.section`
  .container {
    padding: 50px;
  }
  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    .image-wrapper {
      width: 180px;
      min-width: 180px;
      height: 280px;
      min-height: 280px;
      img {
        object-fit: cover;
      }
    }
  }
`;

export { StyledMovies };

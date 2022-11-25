import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  min-width: 150px;
  height: 100%;
  margin-right: 20px;
  z-index: 1;
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
  .content {
    display: grid;
    .link {
      text-decoration: none;
      color: black;
    }
    .link:hover {
      color: #01b4e4;
    }
    h2 {
      font-size: 1em;
      font-weight: 700;
      margin: 0;
      overflow-wrap: break-word;
    }
    p {
      margin: 0;
      font-size: 16px;
      rgba(0,0,0,0.6)
    }
    .card_id {
      visibility: hidden;
    }
  }
  .options {
    position: absolute;
    display: flex;
    align-items: center;
    top: 15px;
    right: 10px;
    cursor: pointer;
  }
  .options-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    opacity: 0.7;
    .card-icon {
      font-size: 20px;
    }
  }
`;

export { StyledCard };

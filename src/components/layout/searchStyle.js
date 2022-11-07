import styled from "styled-components";
import backgroundImg from "../../assets/mediaDiscover/background.jpg";

const StyledSearch = styled.section`
  padding-top: 15px;
  background-image: url(${backgroundImg});
  max-width: 100%;
  min-height: 300px;
  background-size: 100% 300px;
  color: white;
  .title {
    margin-bottom: 0;
    font-size: 35px;
    font-weight: 700;
  }
  .text {
    font-size: 25px;
    font-weight: 600;
    margin-top: 0;
  }
  .form {
    position: relative;
    input {
      position: absolute;
      width: 100%;
      padding: 10px;
      border-radius: 30px;
      border: none;
    }
    .form-btn {
      position: absolute;
      right: -20px;
      border: none;
      height: 36px;
      width: 90px;
      border-radius: 30px;
      background: linear-gradient(45deg, #18ce9b, #18cee8);
      color: #fff;
      font-weight: 700;
    }
    .form-btn:hover {
      color: #000;
      transition: 0.6s;
    }
  }
`;

export { StyledSearch };

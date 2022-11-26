import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 220px;
  padding-top: 40px;
  background: #03243f;

  nav {
    display: flex;
    justify-content: center;
  }
  img {
    width: 100px;
    margin-left: auto;
    display: inherit;
    margin-bottom: 8px;
  }
  .logo-link {
    padding: 5px 10px;
    font-size: 12px;
    backgroung: white;
    font-weight: 700;
    background: #fff;
    border-radius: 4px;
    text-decoration: none;
    color: #01b4e4;
    border: 3px solid #01b4e4;
    text-transform: uppercase;
  }
  .user-list {
    list-style: none;
    color: #fff;
    font-size: small;
  }
  .title {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 800;
    font-size: 13px;
    text-transform: uppercase;
  }
  .link {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
  }
  .footer_text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    color: white;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
export { StyledFooter };

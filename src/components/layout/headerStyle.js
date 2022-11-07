import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: #0b2541;
  padding: 0 40px;
  .nav__wrapper {
    display: flex;
    align-items: center;
  }
  img {
    width: 110px;
    height: 55px;
  }
  .header__list {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .navigation {
    padding: 0;
  }
  .header__items {
    position: relative;
    visibility: hidden;
  }
  .header__items {
    display: block;
    position: absolute;
    top: 50px;
    visibility: visible;
    list-style: none;
    margin-left: 14px;
    padding: 10px 5px;
    border-radius: 4px;
    background: white;
  }
  .header__menu--item:hover {
    background: #f8f9fa;
  }
  .header__items .header__link {
    color: black;
  }
  .header__link {
    margin-left: 15px;
    text-decoration: none;
    font-weight: 400;
  }
  .nav__link {
    text-transform: capitalize;
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    background: transparent;
    border: none;
    margin-left: 13px;
    cursor: pointer;
  }
  .header__log {
    margin-left: auto;
  }
  .header__no--click {
    font-size: x-large;
  }
  .translate {
    border: 1px solid white;
    font-size: 10px;
    border-radius: 3px;
    margin-left: 10px;
  }
  .translate:hover {
    background: white;
    .translate__item {
      color: black;
    }
  }
  .new__buttons {
    display: block;
    margin-top: 4px;
    padding: 10px;
    right: 17%;
    .new__buttons--item {
      position: absolute;
      top: -18px;
      right: 50%;
      color: white;
      font-size: 30px;
    }
    .header__menu--item {
      font-size: 12px;
    }
  }
  .translate__item {
    font-size: 10px;
    padding: 4px;
    margin: 0;
  }
  .header__search-icon {
    margin-left: 30px;
  }
  .search {
    color: #01b4e4;
  }
`;

export { StyledHeader };

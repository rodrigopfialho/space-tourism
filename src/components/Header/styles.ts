import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 136px;
  display: flex;
`;

export const Menu = styled.nav`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  padding: 2rem 6rem 0 2rem;

  button {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 1rem;

    li {
      position: relative;
      list-style-type: none;
      color: var(--white);
      font-family: "Barlow Condensed";
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.4rem;
      letter-spacing: 0.1rem;
      padding-bottom: 2rem;
      cursor: pointer;

      &.active {
        padding-bottom: 2rem;
        border-bottom: 4px solid var(--white);
      }

      span {
        margin-right: 1rem;
        font-weight: 700;
      }

      & + li {
        margin-left: 3rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 96px;
    padding: 2rem 2rem 2rem 4rem;
    justify-content: space-around;

    ul {
      li {
        font-size: 1.1rem;
      }

      li:last-child {
        margin-right: 1rem;
      }
    }
  }

  /* @media(max-width: 600px) {
    .menu {
        display: block;
        position: absolute;
        width: 100%;
        top: 70px;
        right: 0px;
        background: #e7e7e7;
        height: 0px;
        transition: .6s;
        z-index: 1000;
        visibility: hidden;
        overflow-y: hidden;
    }

    .menu a{
      padding: 1rem 0;
        margin: 0 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, .05);
    }

    .btn-mobile {
      display: flex;
        padding:  .5rem 1rem;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        gap: .5rem;
    }

  } */
`;

export const Content = styled.header`
  display: flex;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  img {
    width: 48px;
    height: 48px;
    margin-left: 2rem;
  }
`;

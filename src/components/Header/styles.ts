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

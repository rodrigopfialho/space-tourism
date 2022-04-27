import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 136px;
  display: flex;
`;

export const Menu = styled.nav`

  button {
    display: none;
    width: 5rem;
    /* height: 5rem; */
    /* position: absolute; */
    background: transparent;
    border: 0;
    color: white;
    float: right;
    cursor: pointer;
    padding: 0;
    margin-top: -270px;

       svg {
        width: 80%;
        height:60%;

      }
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin-right: 1rem; */
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding: 2rem 6rem 0 5rem;

    > svg {
          position: absolute;
            top: 6rem;
            color: white;
            right: 2.5rem;
            width: 30px;
            height: 30px;
            z-index: 1000;
            cursor: pointer;
            display: none;
          }

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
    /* padding: 2rem 2rem 2rem 4rem; */
    justify-content: space-around;

    ul {
      margin-right: -0.6rem;
      padding: 2rem 2rem 2rem 4rem;

      li {
        font-size: 1.1rem;
      }

      li:last-child {
        margin-right: 1rem;
      }
    }
  }

   @media (max-width: 649px) {

    button{
      display: flex;
      position: absolute;
      height: 20%;
      right: 10px;    
      
        svg {
          width: 50px;
        }
    }
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        width: 50%;
        height: 1000px;
        top: 180px;
        left: 0px;
        z-index: 1000;
        padding: 0;
        margin: 0;
        

        /* span {
          width: 50px;
        } */
      
        ul {
          width: 100%;
          height: 600px;
          display: none;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          /* transform: translate(-25px); */

          &.open {
            display: block;
          }

          &.clsoe {
            display: none;
          }

          > svg {
            display: block;
          } 


          li:nth-child(2) {
            margin-left: 2.9rem;
          }

          li {
            width: 100%;
            top: 9rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            &.active {
              border-bottom: 0;
            }
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


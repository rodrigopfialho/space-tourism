import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top center;
    background-image: url("./assets/home/background-home-desktop.jpg");
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    background-image: url("./assets/home/background-home-tablet.jpg");

  }
`;

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -5rem;

    @media screen and (max-width: 768px) {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const Space = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;    

    h3 {
        font-family: Barlow Condensed;
        font-weight: 400;
        line-height: 2.1rem;
        font-size: 1.2rem;
        letter-spacing: 4.725px;
        color: var(--white);
        
    }

    h2 {
        font-family: 'Bellefair', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 9rem;
        line-height: 11rem;
        color: var(--white);
    }

    p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--lilac)
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-family: 'Bellefair', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 8rem;
            line-height: 11rem;
            color: var(--white);
        }
        h3 {
            font-family: Barlow Condensed;
            font-weight: 400;
            line-height: 2.1rem;
            font-size: 1.5rem;
            letter-spacing: 4.725px;
            color: var(--white);
        
        }

    }
`;

export const Explore = styled.aside`
    /* margin-right: 10rem; */

    button {
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        border: none;
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.3rem;
        letter-spacing: 0.2rem;
        transition: 0.4s all;
    }

    button:hover {
        cursor: pointer;
        border-radius: 50%;
        box-shadow: 2px 2px 10px 50px #979797;
    }
    
`;

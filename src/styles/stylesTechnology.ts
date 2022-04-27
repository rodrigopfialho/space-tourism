
import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('./assets/technology/background-technology-desktop.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    @media screen and (max-width: 800px) {
        background-image: url('./assets/technology/background-technology-tablet.jpg') ;
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Details = styled.div`
    margin-top: 1.6rem;
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;

    span {
        color: var(--white);
        opacity: 0.25;
        font-weight: 700;
        font-family: 'Barlow Condensed';
        font-size: 1.76rem;
        margin-right: 1rem;
    }

    h4 {
        font-family: 'Barlow Condensed';
        font-size: 1.76rem;
        font-weight: 400;
        color: var(--white);
    }
`;

export const Info = styled.section`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction:column;
    }
`;

export const Navigation = styled.nav`
    width: 40%;

    display: flex;
    justify-content: flex-end;
    align-items: center; 
    margin-top: 4rem;

    ul {
        list-style-type: none;
        li {
            width: 80px;
            height: 80px;
            border-radius: 100px;
            border: 1px solid white;
            display: flex;
            justify-content:  center;
            align-items: center;
            margin-bottom: 1.5rem;
            cursor: pointer;

            a{
                font-family: 'Bellefair';
                font-style: normal;
                font-weight: 400;
                color: var(--white);
                font-size: 2rem;

            }
        }
        .active {
            background-color: var(--white);
            
            a {
                color: var(--black);
            }

        }
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                margin-right: 2rem;
            }
        }
    }
`;

export const TextNavigation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
    margin-left: 4rem;

    h4 {
        font-weight: 400;
        font-family: 'Barlow Condensed';
        color: var(--lilac);
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    h1 {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 3.3rem;
        color: var(--white);
        margin-bottom: 1rem;
    }

    p {
        color: var(--lilac);
        font-family: 'Barlow';
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2rem;
    }

    @media screen and (max-width: 800px) {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8rem;

        p {
            font-size: 1.5rem;
            text-align: center;
        }
    }

`;

export const ImageAside = styled.aside`
    display: flex;
    justify-content: flex-end;
      
    img { 
        width: 25.93rem;
        height: 26.68rem;
    }

    
    @media screen and (max-width: 800px) {
        width: 100%;
        background-size: cover;
            img {
                margin-top: 2rem;
                width: 100%;
            }
    }
`;


export const InfoSpace = styled.section`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
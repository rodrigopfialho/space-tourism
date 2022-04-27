import styled from "styled-components";

export const Container = styled.main`
position: relative;
width: 100vw;
height: 100vh;
background-image: url('./assets/crew/background-crew-desktop.jpg') ;
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;

    @media screen and (max-width: 768px) {
        background-image: url('./assets/crew/background-crew-tablet.jpg') ;
        height: 100%;
        width: 100vw;
        display: flex;
        align-items: ;
        flex-direction: column;
    }
`;

export const Content = styled.section`
    margin-top: 2.5rem;
    display: flex-start;
    flex-direction: column; 
    margin-left: 8%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: 100%;
    }

`;

export const Details = styled.div`
    display: flex; 
    flex-direction: row;

    strong {
        font-size: 28px;
        font-weight: bold;
        font-family: 'Barlow Condensed';
        opacity: 0.7;
        color: var(--gray);
        margin-right: 1rem;
    }

    h5 {
        font-family: 'Barlow Condensed';
        font-size: 28px;
        font-weight: 400;
        color: var(--white);
        letter-spacing: 2.725px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`;

export const Info = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;

    h4{
        font-size: 2rem;
        font-family: 'Bellefair';
        color: var(--white);
        opacity: 0.5 ;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 1rem;
    }

    h1 {
        color: var(--white);
        font-size: 3.5rem;
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 32px;
        color: var(--lilac);
        width:40%;
        height: 130px;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        width: 100%;

        p {
            width: 100% ;
        }
    }
`;

export const Aside = styled.aside`
position: relative;
width:90%;
display: flex;
justify-content: flex-end;
align-items: baseline;


img {
    width: 19.85rem;
    height: 28.12rem;
    display: flex;
    /* align-items: baseline; */
    /* position: absolute; */
    margin-top: -28rem;
}
@media screen and (max-width: 768px) {
       display: flex;
       margin-top: 30rem;
       align-items: center;
       justify-content: center;
}
`;

export const Navigation = styled.nav`
    display: flex;

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin-top: -3rem;

        li {
            margin-right: 1rem;
            color: var(--gray);
            a {
                cursor: pointer;
                font-size: 100px; 
            }

            &.active {
                color: var(--white);
            }
        }
    }

`;


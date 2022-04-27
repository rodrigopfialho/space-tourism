import  styled  from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-image: url('./assets/destination/background-destination-desktop.jpg') ;
    background-position: auto ;

    @media screen and (max-width: 768px) {
        background-image: url('./assets/destination/background-destination-tablet.jpg') ;
        width: 100%;
        height: 100%;
        background-position: auto;
    }
`;

export const Content = styled.main`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const Planet = styled.section`
    width: 50%;
    display: flex ;
    align-items: center;
    flex-direction: column;

    h4 {
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 1.65rem;
        line-height: 2rem;
        color: var(--white);
        letter-spacing: 4.725px;
        padding-bottom: 2rem;

        span {
            padding-right: 1.6rem;
            font-size: 1.75;
            color: var(--white);
            font-weight: 700;
            letter-spacing: 4.725px;
            opacity: 0.25;
        }
        
    }
    img {
        width: 23rem;
        height: 23rem;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        h4 {
            font-size: 1.3rem;
        }

        img { 
            margin: 0 auto;
            width: 18rem;
            height: 18rem;
            margin-bottom: 2rem;
        }
    }


`;
export const Info = styled.aside`
    display: flex;
    flex-direction: column;
    width: 48%;
    position: relative;
    ul {
        
        display: flex;
        li {
            list-style-type: none;
            font-family: 'Barlow Condensed';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.5rem;
            letter-spacing: 2.7px;
            color: var(--white);
            text-transform: uppercase;
            padding-bottom: 15px;
            cursor: pointer;
            &.active {
                padding-bottom: 10px;
                border-bottom: 4px solid var(--white);
            }
            & + li {
                margin-left: 2rem;
            }
        }
    }
    h1 {    
        
        flex-wrap: wrap;
        padding: 1rem 0;
        font-family: Bellefair;
        font-style: normal;
        font-weight: 400;
        font-size: 6rem;
        line-height: 7rem;
        text-transform: uppercase;

        color: var(--white);
    }
    p {
        text-align: justify;
        width: 80%;
        flex-wrap: wrap;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 32px;
        color: var(--lilac);
        letter-spacing: 0.1px;
        padding-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        width: 80%;
        align-items: center;

        h1 {
            font-size: 5rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

export const Distance = styled.div`
    position: relative;
    padding-top: 1rem;
    border-top: 1px solid  #383B4B ;
    width: 80%; 
    display: flex;
    align-items: baseline;
    margin-bottom: 7rem;
    div {
        span {
            font-family: 'Barlow Condensed';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1rem;
            letter-spacing: 2.3625px;
            color: var(--lilac);
        }
        h3 {
            padding-top: 0.8rem;
            font-family: 'Bellefair';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            text-transform: uppercase;
            color: var(--white);
        }
    }
    
    div  + div{
        margin-left: 8rem;
    }
`;
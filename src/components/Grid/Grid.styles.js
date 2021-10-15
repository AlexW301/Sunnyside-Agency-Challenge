import styled from 'styled-components';
//Images

export const Wrapper = styled.div`

`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
`;

export const TextBox = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 0 6rem;

    h1 {
        color: #23303e;
        font-size: 2.5rem;
        text-align: left;
        margin-bottom: 1rem;
    }

    p {
        color: hsl(213, 9%, 39%);
        font-size: 1.2rem;
        text-align: left;
        line-height: 1.8rem;
        color: #818498;
        margin-bottom: 2.5rem;
    }

    .learn-more::after {
        content: "";
        background-color: #fad400;
        opacity: .3;
        z-index: -2;
        position: absolute;
        height: 7px;
        width: 120px;
        bottom: 0;
        left: -5px;
    }

    .learn-more:link,
    .learn-more:visited {
        text-decoration: none;
        color: #23303e;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 900;
        position: relative;
        width: 8.5rem;
    }

    .learn-more:hover,
    .learn-more:active {
        text-decoration: none;
    }

    .learn-more:hover::after {
        opacity: .8;
    }
`;

export const ImageBox = styled.img`
    height: 100%;
    width: 100%;
`;

export const ImageTextBox = styled.div`
    height: 100%;
    width: 100%;
     p {
         position: absolute;
     }

     img {
         object-fit: cover;
         height: 100%;
        width: 100%;
     }

`;
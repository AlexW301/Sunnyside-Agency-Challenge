import styled from "styled-components";
import HeroImage from "../../images/desktop/image-header.jpg"

export const Wrapper = styled.div`
    background: url(${HeroImage}), #3ebfff;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        margin: 0;
        padding-top: 30vh;
        text-align: center;
        font-size: 2.5rem;
        letter-spacing: .8rem;
        color: #fff;
        font-weight: 900;
    }

    img {
        width: 25px;
        height: auto;
    }
`;
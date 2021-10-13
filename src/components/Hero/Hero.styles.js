import styled from "styled-components";
import HeroImage from "../../images/desktop/image-header.jpg"

export const Wrapper = styled.div`
    background-image: url(${HeroImage});
    background-size: contain;
    background-repeat: no-repeat;
    height: 80vh;
`;

export const Content = styled.div`
    h1 {
        margin: 0;
    }
`;
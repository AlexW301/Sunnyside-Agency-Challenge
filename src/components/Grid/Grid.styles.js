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
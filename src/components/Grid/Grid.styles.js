import styled from 'styled-components';
//Images

export const Wrapper = styled.div``;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const TextBox = styled.div`
    height: 600px;
`;

export const ImageBox = styled.img`
    height: 600px;
`;

export const ImageTextBox = styled.div`
    height: 600px;
     p {
         position: absolute;
     }

     img {
         object-fit: cover;
     }

`;
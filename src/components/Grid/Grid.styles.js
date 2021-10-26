import styled from 'styled-components';
//Images

export const Wrapper = styled.div`
    
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;

        .box-2 {
            grid-row-start: 1;
        }

        .box-4 {
            grid-row-start: 4;
        }
    }
`;

export const TextBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 0 18rem;

    h1 {
        color: #23303e;
        font-size: 3rem;
        text-align: left;
        margin-bottom: 1rem;
    }

    p {
        color: hsl(213, 9%, 39%);
        font-size: 1.5rem;
        text-align: left;
        line-height: 1.8rem;
        color: #818498;
        margin-bottom: 2.5rem;
        font-weight: 600;
    }

    .learn-more::after {
        content: "";
        background-color: #fad400;
        opacity: .3;
        z-index: -2;
        position: absolute;
        height: 7px;
        width: 150px;
        bottom: 0;
        left: -5px;
    }

    .learn-more:link,
    .learn-more:visited {
        text-decoration: none;
        color: #23303e;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 900;
        position: relative;
        width: 9.5rem;
    }

    .learn-more:hover,
    .learn-more:active {
        text-decoration: none;
    }

    .learn-more:hover::after {
        opacity: .8;
    }

    .pink::after {
        background-color: pink;
    }

    @media screen and (max-width: 2100px) {
        padding: 0 10rem;
    }

    @media screen and (max-width: 1600px) {
        padding: 7rem;
    }

    @media screen and (max-width: 1300px) {
        padding: 7rem;

        h1 {
            font-size: 2.2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 1200px) {
        height: 900px;
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        height: 600px;
    }

    @media screen and (max-width: 500px) {
        height: 500px;
    }

`;

export const ImageBox = styled.img`
    height: 100%;
    width: 100%;
`;

export const ImageTextBox = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;

    h1 {
        position: absolute;
        margin: 0;
        bottom: 32%;
        right: 50%;
        transform: translate(50%);
        font-weight: 900;
        font-size: 3rem;
    }

     p {
         position: absolute;
         margin: 0;
        bottom: 17%;
        right: 50%;
        transform: translate(50%);
        text-indent: center;
        font-size: 1.5rem;
        font-weight: 900;
        line-height: 1.5;
     }

     img {
         object-fit: cover;
         height: 100%;
         width: 100%;

     }

     .blue {
         color: #19536b;
     }

     .green {
         color: #2d7668;
     }

     @media screen and (max-width: 2100px) {
         h1 {
            bottom: 30%;
         }

         p {
             bottom: 8%;
         }
     }

     @media screen and (max-width: 1800px) {
         h1 {
            bottom: 30%;
         }

         p {
             bottom: 5%;
             width: 500px;
         }
     }

     @media screen and (max-width: 1275px) {
         h1 {
            bottom: 30%;
            font-size: 2.5rem;
         }

         p {
             bottom: 5%;
             width: 500px;
             font-size: 1.7rem;
         }
     }

     @media screen and (max-width: 1100px) {
         h1 {
            bottom: 30%;
            font-size: 2rem;
         }

         p {
             bottom: 5%;
             width: 500px;
             font-size: 1.5rem;
         }
     }

     @media screen and (max-width: 700px) {

        p {
            font-size: 1.2rem;
        }
     }

     @media screen and (max-width: 550px) {
         p {
             font-size: 1rem;
             padding: 0 1rem;
         }
     }

`;
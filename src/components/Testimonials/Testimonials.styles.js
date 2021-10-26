import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50rem;
    h2 {
        margin-bottom: 8rem;
        color: #adb5bd;
        font-size: 1.7rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: .7rem;
    }

    @media screen and (max-width: 1200px) {
        height: 110rem;
    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: 1.3rem;
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    gap: 8rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const Testimonial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25rem;

    img {
        border-radius: 50%;
        width: 5rem;
        margin-bottom: 4rem;
    }

    .testimonial {
        color: hsl(213, 9%, 39%);
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 4rem;
    }

    .heading {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 900;
        color: #23303e;
    }

    .sub-heading {
        color: #ced4da;
        font-weight: 600;
        text-transform: capitalize;
        font-size: .9rem;
        margin: .5rem 0;
    }

    @media screen and (max-width: 1500px) {
        width: 20rem;
    }

    @media screen and (max-width: 1200px) {
        width: 80%;
        margin: 0 auto;
        .testimonial {
            font-size: 1.5rem;
        }
    }
`;
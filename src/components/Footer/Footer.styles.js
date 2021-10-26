import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: hsl(168, 67%, 66%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .footer-logo {
        margin-bottom: 2rem;
    }

    .footer-links {
        margin-bottom: 3rem;
        ul {
            list-style: none;
            display: flex;
            gap: 2rem;

            a:link,
            a:visited {
                text-decoration: none;
                color: rgb(37, 86, 75);
                font-weight: 600;
                font-size: 1.2rem;
                text-transform: capitalize;

            }

            a:hover,
            a:active {
                color: #fff;
                transition: all 300ms;
            }
        }
    }

    .footer-logos {
        ul {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        .svg-logo {
            fill: #2C7566;
            transition: all 300ms;
        }

        .svg-logo:hover {
            fill: #fff;
        }
    }
`;
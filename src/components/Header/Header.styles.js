import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    z-index: 100;
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 2rem 3rem;
`;

export const Logo = styled.img`
    width: 200px;
    height: auto;
`;

export const Menu = styled.div`
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    a:link,
    a:visited {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 900;
    }

    a:hover,
    a:active {
        
    }

    .contact-btn:link,
    .contact-btn:visited {
        color: #000;
        background-color: #fff;
        padding: .8rem 1.2rem;
        border-radius: 2rem;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1rem;
    }


`;
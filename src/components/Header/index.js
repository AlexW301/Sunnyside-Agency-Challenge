import react from "react";
//Styles
import { Wrapper, NavBar, Logo, Menu } from "./Header.styles"
//Images
import sunnySideLogo from '../../images/logo.svg'

const Header = () => {

    return (
        <Wrapper>
            <NavBar>
                <Logo src={sunnySideLogo} alt="sunny-side-logo" />

                <Menu>
                    <ul>
                        <li><a href="https://www.youtube.com">About</a></li>
                        <li><a href="https://www.youtube.com">Services</a></li>
                        <li><a href="https://www.youtube.com">Projects</a></li>
                        <li><a className="contact-btn" href="https://www.youtube.com">Contact</a></li>
                    </ul>
                </Menu>
            </NavBar>
        </Wrapper>
    )
}

export default Header;
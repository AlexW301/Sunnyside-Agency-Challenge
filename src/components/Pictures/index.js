import React from "react";
//Styles
import { Wrapper } from "./Pictures.styles";
// Images
import Cone from "../../images/desktop/image-gallery-cone.jpg";
import MilkBottles from "../../images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../images/desktop/image-gallery-orange.jpg";
import SugarCubes from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Pictures = () => (
    <Wrapper>
        <img src={Cone} alt="Gallery" />
        <img src={MilkBottles} alt="Gallery" />
        <img src={Orange} alt="Gallery" />
        <img src={SugarCubes} alt="Gallery" />
    </Wrapper>
)

export default Pictures;
import React from "react";
// Styles
import { Wrapper, Content, TextBox, ImageBox, ImageTextBox } from "./Grid.styles";
//Images
import EggPic from "../../images/desktop/image-transform.jpg";
import GlassPic from "../../images/desktop/image-stand-out.jpg";
import OrangePic from "../../images/desktop/image-photography.jpg";
import CherryPic from "../../images/desktop/image-graphic-design.jpg";

const Grid = () => {
    return (
        <Wrapper>
            <Content>
                <TextBox>
                    TEST#1
                </TextBox>
                
                <ImageBox src={EggPic} alt="img"/>

                <ImageBox src={GlassPic} alt="img"/>

                <TextBox>
                    TEST#3
                </TextBox>

                <ImageTextBox>
                    <p>Testing 123456</p>
                    <img src={OrangePic} alt="img"/>
                </ImageTextBox>
                <ImageTextBox>
                    <p>Testing 123456</p>
                    <img src={CherryPic} alt="img"/>
                </ImageTextBox>
            </Content>
        </Wrapper>
    )
}

export default Grid;
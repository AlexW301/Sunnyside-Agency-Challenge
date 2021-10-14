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
                    <h1>Transform your brand</h1>
                    <p>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuald that do most of the marketing for yor.</p>
                    <a className="learn-more" href="https://google.com">Learn More</a>
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
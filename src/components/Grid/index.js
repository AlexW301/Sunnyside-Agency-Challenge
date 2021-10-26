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
                <TextBox className="box-1">
                    <h1>Transform your brand</h1>
                    <p>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuald that do most of the marketing for yor.</p>
                    <a className="learn-more" href="https://google.com">Learn More</a>
                </TextBox>
                
                <ImageBox className="box-2" src={EggPic} alt="img"/>

                <ImageBox className="box-3" src={GlassPic} alt="img"/>

                <TextBox className="box-4">
                    <h1>Stand out to the right audience</h1>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <a className="learn-more pink" href="https://google.com">Learn More</a>
                </TextBox>

                <ImageTextBox>
                    <img src={CherryPic} alt="img"/>
                    <h1 className="green">Graphic Design</h1>
                    <p className="green">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </ImageTextBox>
                <ImageTextBox>
                    <img src={OrangePic} alt="img"/>
                    <h1 className="blue">Photography</h1>
                    <p className="blue">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </ImageTextBox>
            </Content>
        </Wrapper>
    )
}

export default Grid;
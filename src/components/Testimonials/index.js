import React from "react";
//Styles
import { Wrapper, Content, Testimonial } from "./Testimonials.styles";
// Images
import Emily from "../../images/image-emily.jpg";
import Jennie from "../../images/image-jennie.jpg";
import Thomas from "../../images/image-thomas.jpg";

const Testimonials = () => {
    return(
        <Wrapper>
            <h2>Client Testimonials</h2>
            <Content>
                <Testimonial>
                    <img src={Emily} alt="Testimonial" />
                    <p className="testimonial">We put our trust in Sunnyside and they delivered, making 
                        sure our needs were met and deadlines were always hit.
                    </p>
                    <p className="heading">Emily R.</p>
                    <p className="sub-heading">Marketing Director</p>
                </Testimonial>
                <Testimonial>
                    <img src={Thomas} alt="Testimonial" />
                    <p className="testimonial">Sunnyside's enthusiasm coupled with their keen interest
                    in our brand's success made it a satisfying and enjoyable experience.
                    </p>
                    <p className="heading">Thomas S.</p>
                    <p className="sub-heading">Chief Operating Officer</p>
                </Testimonial>
                <Testimonial>
                    <img src={Jennie} alt="Testimonial" />
                    <p className="testimonial">Incredible end result! Our sales increased over 400% when
                    we worked with Sunnyside. Highly recommended!
                    </p>
                    <p className="heading">Jennie F.</p>
                    <p className="sub-heading">Business Owner</p>
                </Testimonial>
            </Content>
        </Wrapper>
    )
}

export default Testimonials;
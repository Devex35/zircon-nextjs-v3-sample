import React from 'react';
import {Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AboutSection,AboutLeft,
    AboutRight,AboutBtn,AboutRow} from './about.style'
import Fade from "react-reveal/Fade";
import pageData from '../../../pagedata/Interior2';
import CustomImageComponent from '../Common/customImage.js'

const {About} = pageData;
const AboutComp = () => {
    return (
        <AboutSection id="aboutContainer">
            <Container>
                <AboutRow>
                    <Col md="6">
                        <Fade left delay={1*About.DelayConstant}>
                            <AboutLeft>
                                <CustomImageComponent
                                        imageSrc={"/assets/"+About.AboutLeftImage}
                                        layout="fill"
                                        alt=""
                                        containerStyles = {{
                                            maxWidth:"unset",
                                            marginBottom:"20px",
                                            transition:"all .5s"
                                        }}
                                    /> 
                            </AboutLeft>
                        </Fade>
                    </Col>
                    <Col md="6">
                        <AboutRight>
                            <Fade right delay={1*About.DelayConstant}>
                                <h3>{About.AboutHeading}</h3>
                            </Fade>
                            <Fade right delay={2*About.DelayConstant}>
                                <p>{About.AboutDesc}</p>
                            </Fade>
                            <Fade right delay={3*About.DelayConstant}>
                                <AboutBtn href="#">{About.AboutBtn}</AboutBtn>
                            </Fade>
                        </AboutRight>
                    </Col>
                </AboutRow>
            </Container>
        </AboutSection>
    )
}

export default AboutComp;

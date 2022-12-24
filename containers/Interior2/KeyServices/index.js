import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {KeyServicesSection,KeyServicesRight,
    KeyServicesCol1,KeyServicesCol2,
    KeyServicesCustomContainer,
    KeyServicesRightInnerRow} from './keyservices.style'
import {SectionHeading} from '../Common/common.style';
import Fade from "react-reveal/Fade";
import pageData from '../../../pagedata/Interior2';
import CustomImageComponent from '../Common/customImage'

const {KeyServices} = pageData;
const KeyServicesComp = () => {
    return (
        <KeyServicesSection id="servicesContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <Fade bottom delay={1*KeyServices.DelayConstant}>
                            <SectionHeading>{KeyServices.SectionHeading}</SectionHeading>
                        </Fade>
                    </Col>
                </Row>

                <Fade bottom delay={1*KeyServices.DelayConstant}>
                    <KeyServicesCustomContainer>
                        <KeyServicesRight>
                            <Col lg="4" md="12" sm="12">
                                <CustomImageComponent
                                    imageSrc={"/assets/"+KeyServices.KeyServicesLeftImage}
                                    layout="fill"
                                    alt=""
                                    containerStyles = {{}}
                                />
                            </Col>
                            <Col lg="8" md="12" sm="12">
                                <KeyServicesRightInnerRow>
                                    <Col md="6">
                                        <KeyServicesCol1>
                                            <CustomImageComponent
                                                imageSrc={"/assets/"+KeyServices.KeyServicesCustomContainer[0].KeyServicesIcon}
                                                layout="fill"
                                                alt=""
                                                containerStyles = {{
                                                    width:"50px",
                                                    marginBottom:"20px"
                                                }}
                                            />
                                            <h4>{KeyServices.KeyServicesCustomContainer[0].KeyServicesHeading}</h4>
                                            <p>{KeyServices.KeyServicesCustomContainer[0].KeyServicesDesc}</p>
                                        </KeyServicesCol1>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol2>
                                            <CustomImageComponent
                                                imageSrc={"/assets/"+KeyServices.KeyServicesCustomContainer[1].KeyServicesIcon}
                                                layout="fill"
                                                alt=""
                                                containerStyles = {{
                                                    width:"50px",
                                                    marginBottom:"20px"
                                                }}
                                            />
                                            <h4>{KeyServices.KeyServicesCustomContainer[1].KeyServicesHeading}</h4>
                                            <p>{KeyServices.KeyServicesCustomContainer[1].KeyServicesDesc}</p>
                                        </KeyServicesCol2>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol1>
                                            <CustomImageComponent
                                                imageSrc={"/assets/"+KeyServices.KeyServicesCustomContainer[2].KeyServicesIcon}
                                                layout="fill"
                                                alt=""
                                                containerStyles = {{
                                                    width:"50px",
                                                    marginBottom:"20px"
                                                }}
                                            />
                                            <h4>{KeyServices.KeyServicesCustomContainer[2].KeyServicesHeading}</h4>
                                            <p>{KeyServices.KeyServicesCustomContainer[2].KeyServicesDesc}</p>
                                        </KeyServicesCol1>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol2>
                                            <CustomImageComponent
                                                imageSrc={"/assets/"+KeyServices.KeyServicesCustomContainer[3].KeyServicesIcon}
                                                layout="fill"
                                                alt=""
                                                containerStyles = {{
                                                    width:"50px",
                                                    marginBottom:"20px"
                                                }}
                                            />
                                            <h4>{KeyServices.KeyServicesCustomContainer[3].KeyServicesHeading}</h4>
                                            <p>{KeyServices.KeyServicesCustomContainer[3].KeyServicesDesc}</p>
                                        </KeyServicesCol2>
                                    </Col>
                                </KeyServicesRightInnerRow>
                            </Col>
                        </KeyServicesRight>
                    </KeyServicesCustomContainer>
                </Fade>
            </Container>
        </KeyServicesSection>
    );
}

export default KeyServicesComp;

import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FooterSection,FooterCol,
    FooterUl,FooterLi,FooterMenu,FooterSocial,BottomFooterPara,BottomLink,
    FbIcon,TwitterIcon,LinkedinIcon,InstaIcon,
    BottomFooterWrapper} from './footer.style';
import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from "react-reveal/Fade";
import pageData from '../../../pagedata/Interior2';
import CustomImageComponent from '../Common/customImage'

const {Footer} = pageData;
const FooterComp = () =>{
    return (
        <div>
        <FooterSection>
            <Container>
                <Fade Bottom delay={Footer.DelayConstant}>
                    <Row>
                        <Col md="3">
                            <FooterCol>
                                <CustomImageComponent
                                    imageSrc={"/assets/"+Footer.FooterCol1.FooterLogo} 
                                    layout="fill"
                                    alt=""
                                    containerStyles = {{
                                        maxWidth:"170px",
                                        marginBottom:"10px"
                                    }}
                                /> 
                                {
                                    Footer.FooterCol1.FooterPara.map((item,idx) => {
                                    return <p>
                                        {item.Para}
                                        </p>
                                    })
                                }
                                <FooterSocial href="#" aria-label="Social Link">
                                    <FbIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label="Social Link">
                                    <TwitterIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label="Social Link">
                                    <LinkedinIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label="Social Link">
                                    <InstaIcon/>
                                </FooterSocial>

                            </FooterCol>
                        </Col>
                        <Col md="3">
                            <FooterCol>
                                <h4>{Footer.FooterCol2.FooterTitle}</h4>
                                {
                                    Footer.FooterCol2.FooterPara.map((item,idx) => {
                                        return <p>
                                            {item.Para}
                                        </p>
                                    })
                                }
                            </FooterCol>
                        </Col>
                        <Col md="3">
                            <FooterCol>
                                <h4>{Footer.FooterCol3.FooterTitle}</h4>
                                    <FooterUl>
                                        {
                                            Footer.FooterCol3.FooterUl.map((item,idx) => {
                                                return <FooterLi>
                                                    <FooterMenu href="#">
                                                        {item.FooterMenu}
                                                    </FooterMenu>
                                                </FooterLi>
                                            })
                                        }
                                    </FooterUl>
                            </FooterCol>
                        </Col>
                        <Col md="3">
                            <FooterCol>
                            <h4>{Footer.FooterCol4.FooterTitle}</h4>
                            <ScrollSpy offset={-59} items={Footer.Items} currentClassName="is-current">
                                {
                                    Footer.FooterCol4.FooterUl.map((item,idx) => {
                                    return <FooterLi>
                                        <AnchorLink offset={55} href={item.Href}>
                                            {item.FooterMenu}
                                        </AnchorLink>
                                    </FooterLi>
                                    })
                                }
                            </ScrollSpy>
                            </FooterCol>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </FooterSection>

        <BottomFooterWrapper>
            <Container>
                <Row>
                    <Fade bottom delay={Footer.DelayConstant}>
                        <Col md="12">
                            <BottomFooterPara>
                                {Footer.BottomFooterPara}
                                <BottomLink rel="noreferrer" href={Footer.BottomFooterLink} target="_blank">
                                {Footer.BottomFooterName}
                                </BottomLink>
                            </BottomFooterPara>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </BottomFooterWrapper>
        </div>
    );
}

export default FooterComp;

import React,{Component} from 'react';
import {BannerSection,
    BannerWrapper,
    BannerContents,
    BannerContent,
    BannerContentRight,
    SliderCol,
    BannerBtn,RightArrowIcon,LeftArrowIcon,
    NextPrev
} from './banner.style'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
import pageData from '../../../pagedata/Interior2';
import CustomImageComponent from '../Common/customImage'

const {Banner} = pageData;
class BannerPageSection extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render(){

        var settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
            ]
        };

        return (
            <BannerSection id="homeContainer">
                <BannerWrapper>
                    <BannerContents>
                        <BannerContentRight>
                            <Fade bottom delay={1*Banner.DelayConstant}>
                                <Slider ref={c => (this.slider = c)} {...settings}>
                                    <SliderCol>
                                        <CustomImageComponent
                                            imageSrc={"/assets/"+Banner.BannerImage1}
                                            layout="fill"
                                            alt=""
                                            containerStyles = {{}}
                                            containerClass="banner-img"
                                        /> 
                                        <BannerContent>
                                            <Fade bottom delay={1*Banner.DelayConstant}>
                                                <div>
                                                    <h2>{Banner.BannerH3}</h2>
                                                    <h3>{Banner.BannerH4}</h3>
                                                    <p>{Banner.BannerPara}</p>
                                                    <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                                                </div>
                                            </Fade>
                                        </BannerContent>
                                    </SliderCol>

                                    
                                    <SliderCol>
                                        <CustomImageComponent
                                            imageSrc={"/assets/"+Banner.BannerImage2}
                                            layout="fill"
                                            alt=""
                                            containerStyles = {{}}
                                            containerClass="banner-img"
                                        />    
                                        <BannerContent>
                                            <Fade bottom delay={1*Banner.DelayConstant}>
                                                <div>
                                                    <h2>{Banner.BannerH3}</h2>
                                                    <h3>{Banner.BannerH4}</h3>
                                                    <p>{Banner.BannerPara}</p>
                                                    <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                                                </div>
                                            </Fade>
                                        </BannerContent>
                                    </SliderCol> 
                                    
                                    <SliderCol>
                                        <CustomImageComponent
                                            imageSrc={"/assets/"+Banner.BannerImage3}
                                            layout="fill"
                                            alt=""
                                            containerStyles = {{}}
                                            containerClass="banner-img"
                                        /> 
                                        <BannerContent>
                                            <Fade bottom delay={1*Banner.DelayConstant}>
                                                <div>
                                                    <h2>{Banner.BannerH3}</h2>
                                                    <h3>{Banner.BannerH4}</h3>
                                                    <p>{Banner.BannerPara}</p>
                                                    <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                                                </div>
                                            </Fade>
                                        </BannerContent>
                                    </SliderCol>
                                </Slider>
                            </Fade>
                            <NextPrev>
                                
                                <LeftArrowIcon onClick={this.previous} src={"/assets/"+Banner.PrevImg} alt=""/>
                                <RightArrowIcon onClick={this.next} src={"/assets/"+Banner.NextImg} alt=""/>
                            </NextPrev>

                        </BannerContentRight>
                    </BannerContents>
                </BannerWrapper>
            </BannerSection>
        )
    }
}


export default BannerPageSection

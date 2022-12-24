import styled from 'styled-components';
import {Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import {RightArrow} from "@styled-icons/boxicons-solid/RightArrow"
import {LeftArrow} from "@styled-icons/boxicons-solid/LeftArrow"

export const BannerSection = styled.section`
    background:#f9fafc;
    background-size:cover;
    height:100vh;

    @media ${device.tablet} {
        min-height:100vh ;
        height:auto;
        padding-right: 0px;
        padding-left: 0px;
    }
`;
export const BannerWrapper = styled.div`
    @media ${device.minlaptopL} {

    }
`;

export const BannerContents = styled.div`
    display:flex;
    align-items:center;

    @media ${device.tablet} {

    }

`;

export const BannerContent = styled.div`
    padding-right: 30px;
    padding-top: 30px;
    padding-left:15px;
    position:absolute;
    left:0;
    top:0;
    text-align:left;
    margin-left: calc(50% - 660px);
    display:flex;
    align-items:center;
    height:100%;
    
    div{
        background: #ffffffb8;
        padding: 30px;
        border-left: 5px solid #2979ff;
    }

    @media ${device.laptopL} {
        margin-left: calc( 50% - 570px);
    }

    @media ${device.laptopM} {
        margin-left: calc(50% - 480px);
    }

    @media ${device.laptop} {
        width:45%;
        margin-left: calc(50% - 360px);
    }

    @media ${device.tablet} {
        width:100%;
        max-width: 540px;
        text-align:center;
        margin:auto;
        padding:50px 20px 0px;
        right:0;

        div{
            border:none;
            border-top: 5px solid #2979ff;
        }
    }

    h2{
        margin-bottom:0px;
    }
    P{
        color:#484848;
        font-size:16px;
    }
`;


export const BannerBtn = styled(Commonbtn)`
    box-shadow: 0px 0px 13px -2px #eaeaea;
    text-decoration:none;
    :hover{
        color:#fff;
        text-decoration:none;
    }
    
`;

export const BannerContentRight = styled.div`
    width:100%;
    position:relative;
    height:auto;


    @media ${device.laptop} {
        
    }
    @media ${device.tablet} {
        text-align:center;
    }

    .slick-list{
        @media ${device.tablet} {
            height:100vh;
        }
    }

    .BannerImage{
        height:100vh;

        @media ${device.tablet} {
            height:100vh;
        }
    }
`;


export const SliderCol = styled.div`
    position:relative;
    img{
        width:100%;
        height:100vh;
    }
    .banner-img img{
        height:100vh !important;
        width:100% !important;
        object-fit:cover !important;
    }
`;

export const NextPrev = styled.div`
    text-align:center;
    position:absolute;
    bottom:20px;
    left:0;
    right:0;

    button{
        border:none;
        background:none;
        outline:none;
    }

    @media ${device.tablet} {
        width:100%;
        max-width: 540px;
        text-align:center;
        margin:auto;
        padding:50px 20px 0px;
        right:0;
    }
`;

export const RightArrowIcon = styled(RightArrow)`
    height:40px;
    color:#fff;
`;

export const LeftArrowIcon = styled(LeftArrow)`
    height:40px;
    color:#fff;
`;

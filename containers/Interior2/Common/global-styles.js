import {createGlobalStyle} from 'styled-components';
import {device} from "./device"
const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Hind', sans-serif;
        font-weight:400;
        overflow:hidden;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        color:#353535;
    }
    a{
        font-size:16px;
    }
    h1{
        font-size:50px;
        line-height:56px;
    }
    h2{
        font-size:48px;
        line-height:54px;

        @media ${device.laptop} {
            font-size:40px;
            line-height: 48px;
        }
        @media ${device.tablet} {
            font-size:40px;
            line-height: 48px;
        }
    }
    h3{
        font-size:40px;
        line-height:46px;

        @media ${device.laptop} {
            line-height: 40px;
            font-size:35px;
        }
        @media ${device.tablet} {
            line-height: 40px;
            font-size:35px;
        }
    }
    h4{
        font-size:26px;
        line-height:32px;
    }
    h5{
        font-size:24px;
        line-height:30px;
    }
    h6{
        font-size:20px;
        line-height:26px;
    }
    p{
        color:#484848;
        margin-bottom:26px;
        font-size:15px;
        line-height:25px;
    }
    img{
        margin-bottom:0px;
    }
    ul{
        padding:0;
        margin:0;
    }
`;

export default GlobalStyle;

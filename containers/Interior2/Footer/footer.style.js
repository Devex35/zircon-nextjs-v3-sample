import styled from 'styled-components';
import {device} from '../Common/device'
import {SocialFacebook} from '@styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from '@styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from '@styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from '@styled-icons/typicons/SocialInstagram'

export const FooterSection = styled.footer`
    width:100%;
    padding:60px 0px;
    background-size:100%;
    background-image: url('/assets/interior2-images/graffiti.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    @media ${device.tablet} {
        padding:60px 10px;
    }
`;

export const FooterCol = styled.div`
    padding:20px 0px;
    text-align:left;

    ul{
        margin-left:0px;
        margin-bottom:0px;
    }
    a{
        color:#fff;
        text-decoration:none;
        :hover{
            text-decoration:underline;
        }
    }
    img{
        max-width: 170px;

        @media ${device.laptop} {
            max-width: 140px;
        }

        @media ${device.tablet} {
            max-width: 170px;
        }
    }

    h4{
        margin-bottom:25px;
        text-transform:uppercase;
        text-align:left;
        color:#fff;
    }

    p{
        margin-bottom:5px;
        color:#fff;
    }

`;




export const FooterSocial = styled.a`
    margin-right:10px;
`;



export const FooterUl = styled.ul`
    padding-left:0px;
    margin-left:0px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;
export const FooterMenu = styled.a`
    color:#595959;
    text-decoration:none;
    font-size:15px;
    color:#fff;
    :hover
    {
        text-decoration:underline;
    }
`;
export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    padding: 6px;
    border-radius:100%;
    margin: 3px 2px;
    color: #fff;
    background: #ec008c;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    padding: 6px;
    border-radius:100%;
    margin: 3px 2px;
    color: #fff;
    background:#595dd8;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    padding: 6px;
    border-radius:100%;
    margin: 3px 2px;
    color: #fff;
    background: #00aeee;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    background: #3949aa;
    padding: 6px;
    border-radius:100%;
    margin: 3px 2px;
    color: #fff;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;

export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:10px 0px;
    text-align:left;
    background:#2f2f2f;
    background-size:100%;
`;

export const BottomFooterPara = styled.p`
    margin-bottom:0px;
    padding:10px 0px;
    font-size:15px;
    color:#fff;

    @media ${device.tablet} {
        text-align:center;
    }
`;

export const BottomLink = styled.a`
    font-size:15px;
    margin-bottom:0px;
    padding:10px 0px;
    color:#fff;
    text-decoration:none;
    :hover{
        text-decoration:underline;
        color:#fff;
    }
`;

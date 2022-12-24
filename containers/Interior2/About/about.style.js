import styled from 'styled-components';
import {Commonbtn} from '../Common/common.style';
import {Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const AboutSection = styled.section`
    padding:80px 0px;
    background:#fff;

    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const AboutRow = styled(Row)`
    align-items:center;
`;

export const AboutLeft = styled.div`
    width: 100%;
    text-align: center;
    margin-right:50px;
    padding: 0px 20px;
    @media ${device.tablet} {
        padding-right: 0px;
        padding-left: 0px;
    }
`;

export const AboutRight = styled.div`
    padding-left:80px;

    @media ${device.tablet} {
        width:100%;
        padding-left:0px;
        padding-top:50px;
    }

    h3{
        text-align:left;
        margin-bottom:30px;
    }
    p{
        margin-bottom:30px;
    }
`;


export const AboutBtn = styled(Commonbtn)`
    color: #fff;
    background:#2979ff;
    box-shadow: 0px 0px 13px -2px #b1b1b1;
    text-decoration:none;

    :hover{
        color:#fff;
        text-decoration:none;
    }
`;

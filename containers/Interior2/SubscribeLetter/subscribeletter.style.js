import styled from 'styled-components';
import {device} from '../Common/device'

export const NewsletterSection = styled.section`
    padding:80px 0px;
    background:#fff;
    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const NewsletterInner = styled.div`
    margin-top:45px;
    @media ${device.tablet} {
        margin-top:30px;
    }
`;

export const Form = styled.form`
    margin-bottom:0px;
`;

export const FormGroup = styled.div`
    margin-bottom:0px;
`;

export const NewsletterForm = styled.div`
    display:flex;
    max-width:800px;
    margin:auto;
`;

export const NewsletterInput = styled.input`
    width:75%;
    box-shadow: 0px 0px 12px #e4e4e4;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border:none;
    outline:0;
    padding:15px;
    ::placeholder{
        font-size:16px;
    }
    @media ${device.tablet} {
        width:70%;
    }
`;

export const NewsletterSubmit = styled.button`
    width:25%;
    border:none;
    background:#2979ff;
    line-height: 32px;
    color:#fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    cursor:pointer;
    :hover
    {
        background:#061bff;
    }
    @media ${device.tablet} {
        width:30%;
    }
`;

export const SubscribeSpanErr = styled.span`
    color: red;
    font-size: 14px;
    max-width: 800px;
    margin: auto;
    display: block;
`;
export const SubscribeSpanSuccess = styled.span`
    color:green;
    font-size: 14px;
    max-width: 800px;
    margin: auto;
    display: block;
`;
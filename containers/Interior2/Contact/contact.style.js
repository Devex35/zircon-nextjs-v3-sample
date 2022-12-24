import styled from 'styled-components';
import {Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const ContactSection = styled.section`
    padding:80px 0px;
    background:#f9fafc;
    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const ContactInner = styled.div`
`;

export const ContactRow = styled(Row)`
    align-items:center;
`;

export const ContactLeft = styled.div`
    h1{
        margin-bottom:25px;
        text-transform:uppercase;
    }
    p{

    }
`;



export const ContactRight = styled.div`
    padding-left:100px;

    @media ${device.laptop} {
        padding-left:40px;
    }
    @media ${device.tablet} {
        padding-bottom:50px;
        padding-right:0px;
        padding-left:0px;
    }
`;

export const ContactCard = styled.div`
    background:#fff;
    padding:50px;
    box-shadow: 0px 0px 12px #e4e4e4;
    border-radius:10px;
    @media ${device.laptop} {
        padding:40px;
    }
    @media ${device.tablet} {
        padding:25px;
    }
`;
export const Form = styled.div`
    margin-bottom:0px;
`;
export const FormGroup = styled.div`
    margin-bottom:30px;
`;

export const InputField = styled.input`
    width:100%;
    border:none;
    border-radius:6px;
    background:#f7f7f7;
    // box-shadow: 0px 0px 12px #e4e4e4;
    padding:15px;
    outline:0;
    ::placeholder
    {
        font-size:16px;
        color: #7a7f83;
    }
`;

export const ContactSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const TextArea = styled.textarea`
    width:100%;
    border:none;
    border-radius:6px;
    background:#f7f7f7;
    height: 120px;
    padding:15px;
    height:180px;
    outline:0;
    ::placeholder
    {
        font-size:16px;
        color: #7a7f83;
    }
`;

export const SubmitBtn = styled.button`
    display:block;
    width:100%;
    font-size:18px;
    color:#fff;
    outline:0;
    cursor:pointer;
    border:none;
    padding:15px;
    border-radius:6px;
    transition:all .5s;
    background:#2979ff;
    :hover
    {
        background:#061bff;
    }
`;

export const ContactSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

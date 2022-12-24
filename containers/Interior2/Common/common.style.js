import styled from 'styled-components';

export const Commonbtn = styled.a`
    font-size:14px;
    background: #2962ff;
    color: #fff;
    padding: 6px 30px;
    border-radius: 4px;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #4e32ed;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    :hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        textdecoration:none;
    }
`;



export const SectionHeading = styled.h3`
    color:#353535;
    margin-bottom:15px;
    text-align:center;
    font-weight:700;
`;

import styled from 'styled-components';
import {device} from '../Common/device'
import {
    Navbar
} from 'react-bootstrap';

export const NavbarCustom = styled(Navbar)`
    background: ${props => props.isSticky?"#ffffff":"#ffffff00"} !important;
    padding:0px !important;
    box-shadow: ${props => props.isSticky?"0px 1px 11px -1px #d6d6d6":"none"};

    @media ${device.laptop} {
        .navbar-collapse{
            background:#fff !important;
            padding:10px !important;
        }
    }
    @media ${device.mobileXL} {
        padding-left:15px !important;
        padding-right:15px !important;
    }

    //Scrollspy ul styles
    ul{
        margin:0;
    }

    li{
        padding:15px 20px;
        margin: 0;
        display: inline-flex;

        @media ${device.laptop}{
            display:block;
        }
    }

    //Anchor Link - Selected Menu Item

    .is-current{
        a{
            color: ${props => props.isSticky?"#2962ff":"#ffffff"} !important;

            @media ${device.laptop} {
                border:none;
                color: #2962ff !important;
            }
        }

        @media ${device.laptop} {
            border-bottom: 2px solid #2962ff;
            display:block;
        }

    }

    //Anchor Link Styles
    a{
        padding:0px 0px;
        color: ${props => props.isSticky?"#494949":"#d6d6d6"};

        :hover{
            text-decoration:none;
            color: ${props => props.isSticky?"#000":"#fff"};
        }

        @media ${device.laptop} {
            color:#494949;
        }
    }

    //Logo
    .navbar-brand {
        padding:10px 0px;

        @media ${device.laptop} {
            padding:15px 0px;
        }
    }

    .logo-img img{
        @media ${device.mobileM} {
            max-width:145px;
            width:145px !important;
        }
    }
`;

export const BrandLogo = styled.img`
    margin-bottom:0px;
    max-width:${props => props.isSticky?"140px":"175px"};
    transition:all .5s;

    @media ${device.mobileM} {
        max-width:145px;
    }
`;

export const NavbarToggleCustom = styled(Navbar.Toggle)`
    outline:0px !important;

    border-color:${props => props.isSticky?"rgba(255,255,255,.1)":"rgba(255,255,255,1)"} !important;
    .navbar-toggler-icon{
    background-image:url("${props => props.isSticky?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255,1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"}") !important;
    }
`;

import React,{Component} from "react";
import {NavbarCustom,NavbarToggleCustom,BrandLogo} from "./headermenubs.style"
import {
    Container,Nav,Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollSpy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pageData from '../../../pagedata/Interior2';
import CustomImageComponent from '../Common/customImage.js'

const {Header} = pageData;
class HeadermenuSection extends Component{
    constructor(props){
        super(props);
        this.state = { 
            stickyClass:'top',
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            let stickyClass = 'topSticky';
            let scrollPos = window.scrollY;

            if(scrollPos < 100){
                stickyClass = 'top';
            }

            if(this.state.stickyClass !== stickyClass)
            {
                this.setState({ stickyClass });
            }
                
        });
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll'); 
    } 

    render(){
        return(
            <NavbarCustom 
                expand="lg" fixed="top" 
                isSticky={this.state.stickyClass==="topSticky"?true:false}>
                <Container>
                    <Navbar.Brand href="/" style={{display:"inline-block"}}>
                        <CustomImageComponent
                            imageSrc={this.state.stickyClass==="topSticky"
                                ?"/assets/"+Header.BrandLogoSticky
                                :"/assets/"+Header.BrandLogo}
                            layout="fill"
                            alt="Brand Logo"
                            containerStyles = {{
                                maxWidth:this.state.stickyClass==="topSticky"?"140px":"175px",
                                marginBottom:"0px",
                                transition:"all .5s"
                            }}
                            containerClass="logo-img"
                        />
                    </Navbar.Brand>

                    <NavbarToggleCustom
                    isSticky={this.state.stickyClass==="topSticky"?true:false}
                    aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ScrollSpy offset={-59} items={Header.Items} currentClassName="is-current">
                            {
                                Header.MenuItems.map((menuItem, idx)=>{
                                    return <li>
                                        <AnchorLink offset={55} href={menuItem.Href} 
                                        isSticky={this.state.stickyClass==="topSticky"?true:false}>
                                            {menuItem.Menu}
                                        </AnchorLink>
                                    </li>
                                })
                            }
                            </ScrollSpy>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </NavbarCustom>
            
        );
    }
}


  export default HeadermenuSection

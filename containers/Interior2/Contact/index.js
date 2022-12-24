import React,{Component} from 'react';
import {Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactSection,ContactInner,ContactRight,InputField,ContactSpanErr,
    ContactSpanSuccess,ContactCard,TextArea,SubmitBtn,ContactLeft,
    Form,FormGroup,ContactRow} from './contact.style';
import Fade from "react-reveal/Fade";
import pageData from '../../../pagedata/Interior2';

const {ContactUs} = pageData;
const WRNG_MSG_TIMEOUT = 3000;

class ContactPageSection extends Component{
    constructor(){
        super();
        this.state = {
           contact_name:"",
           contact_email:"",
           contact_subject:"",
           contact_message:"",
           errors:[]
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validateForm()
    {
        var error_flag = false;
        let errors = {};
        if(this.state.contact_name === "")
        {
            error_flag = true;
            errors['contact_name'] = "Please enter full name!";
            setTimeout(function(){
                this.setState({errors:{}});
            }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_email === "")
        {
            error_flag = true;
            errors['contact_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_email !== "")
        {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.contact_email)) {
                error_flag = true;
                errors["contact_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contact_subject === "")
        {
            error_flag = true;
            errors["contact_subject"] = "Please enter subject!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_message === "")
        {
            error_flag = true;
            errors["contact_message"] = "Please enter message!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        this.setState({
            errors: errors
        });
        return error_flag;
    }

    contactUsSubmit = (e) =>{
        e.preventDefault();
        if(!this.validateForm())
        {
            //SUCCESS
            //TO DO
            console.log("Name: "+this.state.contact_name);
            console.log("Email: "+this.state.contact_email);
            console.log("Subject: "+this.state.contact_subject);
            console.log("Message: "+this.state.contact_message);
            document.getElementById("success_contact_message").innerHTML = "Email sent successfully.";
            this.setState({
                contact_name:"",
                contact_email:"",
                contact_subject:"",
                contact_message:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_contact_message").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }


    render(){
        return(
            <ContactSection id="contactContainer">
                <Container>
                    <ContactInner>
                        <ContactRow>
                            <Col md="5">
                                <ContactLeft>
                                    <Fade left delay={1*ContactUs.DelayConstant}>
                                        <h1>{ContactUs.SectionHeading}</h1>
                                    </Fade>
                                    <Fade left delay={2*ContactUs.DelayConstant}>
                                        <p>{ContactUs.ContactRight.ContactRightPara}</p>
                                    </Fade>
                                </ContactLeft>
                            </Col>
                            <Col md="7">
                                <ContactRight>
                                    <Fade right delay={1*ContactUs.DelayConstant}>
                                        <ContactCard>
                                            <Form id="contactForm" method="post" onSubmit={this.contactUsSubmit}>

                                                <FormGroup>
                                                    <InputField aria-label="Full Name" placeholder="Full Name" name="contact_name" onChange={this.handleChange} value={this.state.contact_name}></InputField>
                                                    <ContactSpanErr id="err_contact_name">{this.state.errors.contact_name}</ContactSpanErr>
                                                </FormGroup>

                                                <FormGroup>
                                                    <InputField aria-label="Email" placeholder="Email" name="contact_email" onChange={this.handleChange} value={this.state.contact_email}></InputField>
                                                    <ContactSpanErr id="err_contact_email">{this.state.errors.contact_email}</ContactSpanErr>
                                                </FormGroup>

                                                <FormGroup>
                                                    <InputField aria-label="Subject" placeholder="Subject" name="contact_subject" onChange={this.handleChange} value={this.state.contact_subject}></InputField>
                                                    <ContactSpanErr id="err_contact_subject">{this.state.errors.contact_subject}</ContactSpanErr>
                                                </FormGroup>

                                                <FormGroup>
                                                    <TextArea aria-label="Message" placeholder="Message" name="contact_message" onChange={this.handleChange} value={this.state.contact_message}></TextArea>
                                                    <ContactSpanErr id="err_contact_message">{this.state.errors.contact_message}</ContactSpanErr>
                                                </FormGroup>

                                                <SubmitBtn type="submit">Submit</SubmitBtn>
                                                <ContactSpanSuccess id="success_contact_message"></ContactSpanSuccess>
                                            </Form>
                                        </ContactCard>
                                    </Fade>
                                </ContactRight>
                            </Col>
                        </ContactRow>
                    </ContactInner>
                </Container>
            </ContactSection>
        )
    }
}


  export default ContactPageSection

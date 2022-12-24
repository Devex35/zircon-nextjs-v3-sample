import React from "react";
import GlobalStyle from "../containers/Interior2/Common/global-styles"
import Banner from "../containers/Interior2/Banner";
import HeaderMenuBS from "../containers/Interior2/HeaderMenuBS";
import About from "../containers/Interior2/About";
import KeyServices from "../containers/Interior2/KeyServices";
import SubscribeLetter from "../containers/Interior2/SubscribeLetter";
import Contact from "../containers/Interior2/Contact";
import Footer from "../containers/Interior2/Footer";
// import "../components/layout.css";
import Seo from "../components/seo";
import Fonts from "../containers/Interior2/Common/fonts"
import BuyNow from "../components/BuyNow";

const Interior2 = () => (
    <div>
        <Fonts />
        <GlobalStyle />
        <BuyNow />
        <HeaderMenuBS/>
            <main>
                <Seo 
                    title="Interior 2 ReactJS Landing Template | GatsbyJS Templates | Zircon"
                    description="Buy Interior 2 Landing page template from Reactrepo. Template is built with react, gatsbyjs, bootstrap and styled components"
                />
                <Banner/>
                <About/>
                <KeyServices />
                <SubscribeLetter />
                <Contact />
            </main>
        <Footer />
    </div>
 
 )
 
 export default Interior2;
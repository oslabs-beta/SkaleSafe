import About from "../components/About/About";
import  ContactUs  from "../components/contactUs/ContactUs";
import Documentation from "../components/Documentation/Documentation";
import Home  from "../components/Home";
import React from "react";

const HomeContainer = () => {
    return(
        <div>
            <Home />
            <About />
            <Documentation />
            <ContactUs />
        </div>
    )
}

export default HomeContainer;

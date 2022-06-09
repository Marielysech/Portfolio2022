import MenuDrawer from "../components/MenuDrawer";
import NavBar from "../components/Navbar";
import { useState } from "react";
import About from "../components/About";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import { Contact } from "../components/Contact";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

export default function SiteContent() {

  const [isOpen, SetIsOpen] = useState(false)

  const toggleOpen = () => {
      SetIsOpen(!isOpen)
  }

    return (
      <div>
        <MenuDrawer isOpen={isOpen} toggleOpen={toggleOpen}/>
        <NavBar isOpen={isOpen} toggleOpen={toggleOpen}/>
        <Projects />

        <Intro />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </div>
    );
  }
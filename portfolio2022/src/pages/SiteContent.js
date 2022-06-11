import MenuDrawer from "../components/MenuDrawer";
import NavBar from "../components/Navbar";
import { useState } from "react";
import About from "../components/About";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import { Contact } from "../components/Contact";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import styled from "styled-components";


const SectionContainer = styled.div`
  width: 100%;
  /* margin-top: -2rem;
  padding-top: 2rem; */
`


export default function SiteContent() {

  const [isOpen, SetIsOpen] = useState(false)

  const toggleOpen = () => {
      SetIsOpen(!isOpen)
  }

    return (
      <div>
        <MenuDrawer isOpen={isOpen} toggleOpen={toggleOpen}/>
        <NavBar isOpen={isOpen} toggleOpen={toggleOpen}/>
        <Stack />
        <Projects/>
        <Footer />
      </div>
    );
  }
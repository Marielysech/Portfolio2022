import MenuDrawer from "../components/MenuDrawer";
import NavBar from "../components/Navbar";
import { useState } from "react";

export default function Intro() {

  const [isOpen, SetIsOpen] = useState(false)

  const toggleOpen = () => {
      SetIsOpen(!isOpen)
  }

    return (
      <div>
        <MenuDrawer isOpen={isOpen} toggleOpen={toggleOpen}/>
        <NavBar isOpen={isOpen} toggleOpen={toggleOpen}/>
      </div>
    );
  }
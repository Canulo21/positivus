import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`inline-block xl:hidden  ${isOpen ? "is-active" : ""}`}>
      <Hamburger size={50} toggled={isOpen} toggle={setOpen} />
    </div>
  );
}

export default HamburgerMenu;

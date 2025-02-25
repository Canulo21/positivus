import { Divide as Hamburger } from "hamburger-react";

function HamburgerButton({ isOpen, setOpen }) {
  return (
    <div className={`inline-block xl:hidden  ${isOpen ? "is-active" : ""}`}>
      <Hamburger size={50} toggled={isOpen} toggle={setOpen} />
    </div>
  );
}

export default HamburgerButton;

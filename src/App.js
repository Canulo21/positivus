import Footer from "./components/Footer.js/Footer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";

import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <div
        className={`site-holder bg-[#ffffff] z-10 float-right relative w-full transition-all duration-300 ease-in-out ${
          isOpen ? "is-active right-64 sm:right-80" : "right-0"
        }`}
      >
        <header className="App-header">
          <Nav isOpen={isOpen} setOpen={setOpen} />
        </header>
        <div className="px-3 lg:px-10 xl:px-12 2xl:px-[100px]">
          <HeroBanner />
          {/* pages here */}
          <Home />
          {/* end of pages */}
        </div>
        <Footer />
      </div>
      <div
        className={`resp-bar-holder float-left ${isOpen ? "is-active" : ""}`}
      >
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default App;

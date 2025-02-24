import Footer from "./components/Footer.js/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="px-3 lg:px-10 xl:px-12 2xl:px-[100px]">
        <HeroBanner />
        {/* pages here */}
        <Home />
        {/* end of pages */}
      </div>

      <Footer />
    </div>
  );
}

export default App;

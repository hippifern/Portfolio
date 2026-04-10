import "./css/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;

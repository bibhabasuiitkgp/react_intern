import Hero from "./Pages/Hero_Section/Hero";
import Cards from "./Pages/Cards_intro/Cards";
import "./App.css";
import Timeline from "./Pages/Timeline/Timeline";
import Footer from "./Pages/Footer/Slider";
import Navbar from "./Pages/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Timeline />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

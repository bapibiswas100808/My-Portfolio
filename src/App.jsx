import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Skills></Skills>
    </>
  );
}

export default App;

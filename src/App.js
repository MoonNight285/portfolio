import Header from "./header/Header";
import Introduction from "./body/Introduction";
import "./App.css";
import AboutMe from "./body/AboutMe";
import Skill from "./body/Skill";
import PortfolioContent from "./body/PortfolioContent";
import Footer from "./footer/Footer";

function App() {
  return (
    <div id={"div-main-app"}>
        <Header/>
        <Introduction />
        <AboutMe />
        <Skill />
        <PortfolioContent />
        <Footer />
    </div>
  );
}

export default App;

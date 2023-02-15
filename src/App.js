import Header from "./header/Header";
import Introduction from "./body/Introduction";
import "./App.css";
import AboutMe from "./body/AboutMe";
import Skill from "./body/Skill";

function App() {
  return (
    <div id={"div-main-app"}>
        <Header/>
        <Introduction />
        <AboutMe />
        <Skill />
    </div>
  );
}

export default App;

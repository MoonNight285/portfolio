import Header from "./header/Header";
import Introduction from "./body/Introduction";
import "./App.css";
import AboutMe from "./body/AboutMe";

function App() {
  return (
    <div id={"div-main-app"}>
        <Header/>
        <Introduction />
        <AboutMe />
    </div>
  );
}

export default App;

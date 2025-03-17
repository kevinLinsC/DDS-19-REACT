import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Motivacao from "./components/Motivacao";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <>
      <TemplateExpressions />
      <hr />
      <FirstComponent />
      {/* <Motivacao/> */}
    </>
  );
}

export default App;

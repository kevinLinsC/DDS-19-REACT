import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

// Importanto do React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container"

import NewNavBar from "./components/NewNavBar";


function App() {
  return(
    <>
      <NewNavBar />
      <Container>
        
        <Outlet />
      </Container>
    </>
  )
}

export default App;

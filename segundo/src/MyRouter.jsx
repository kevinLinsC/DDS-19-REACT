import { createBrowserRouter } from "react-router-dom"

//  Importação das páginas
import App from "./App.jsx";
import PaginaErro from "./pages/PaginaErro.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Contato from "./pages/Contato.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Login from "./pages/Login.jsx";
import InfoCard from "./components/InfoCard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <PaginaErro />,
        children:[
            {
                path:"/",
                element: <Home />,
            },
            {
                path:"/login",
                element: <Login />,
            },
            {
                path:"/Cadastro",
                element: <Cadastro />,
            },
            {
                path:"/Contato",
                element: <Contato />,
            },
            {
                path: "/Home",
                element: <Home />,
            },
            {
                path:"Sobre",
                element: <Sobre />,
            },
            {
                path:"/informacao/:id",
                element: <InfoCard />,
            },
        ],
    },
]);

export default router;
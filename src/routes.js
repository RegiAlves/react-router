import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Erro from "./pages/Erro";

import Header from "./components/Header";
import Produto from "./pages/Produto";

// Na versão 6 do react-router-dom tem que usar element ao invés de component
// referência:
// https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element

const Router = ()=>{
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exect path="/" element={ <Home/> }  ></Route>
        <Route path="/sobre" element={ <Sobre/> } ></Route>
        <Route exect path="/contato" element={ <Contato/> } ></Route>
        <Route path="/produto/:id" element={ <Produto/> }></Route>

        <Route path="*" element={ <Erro/> } ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

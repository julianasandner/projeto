import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Rodape from "./componentes/Rodape";
import ScrollToTop from "./componentes/ScrollToTop";
import Inicio from './paginas/Inicio';
import NaoEncontrado from "./paginas/NaoEncontrado";
import Post from "./paginas/Post";
import SobreMim from './paginas/Sobre mim';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes >
        <Route path="/" element={ <PaginaPadrao /> }>
          <Route index element={ <Inicio /> } />
          <Route path="sobremim" element={ <SobreMim /> }  />
        </Route>
        <Route path="posts/:id/*" element={ <Post /> }/>
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  ); 
}

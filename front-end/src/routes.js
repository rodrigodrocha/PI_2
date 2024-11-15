import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './templates/Home/index';
import { Cadastro } from './templates/Cadastro/index';
import { Login } from './templates/Login/index';
import { Produto } from './templates/Produto/index';

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/cadastro" element={ <Cadastro/>}></Route>
            <Route path="/login" element={ <Login/>}></Route>
            <Route path="/produto" element={ <Produto/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
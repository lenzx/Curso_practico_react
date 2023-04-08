import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../style/global.css';
import Layaout from "../containers/layouts";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPaswword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Layaout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layaout>
        </BrowserRouter>
    );
}

export default App;
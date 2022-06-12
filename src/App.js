import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navebar from "./Pages/Shared/Navebar";

function App() {
    return (
        <div className="back-colour">
            <Navebar></Navebar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;

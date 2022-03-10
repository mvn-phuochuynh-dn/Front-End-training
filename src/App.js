import { useState } from "react";
import "./assets/scss/styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Features/HomePage";
import AboutPage from "./pages/Features/AboutPage";
import Pages from "./pages/Features/Pages";
import ShopPages from "./pages/Features/ShopPages";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [gotopActive, setGoTopActive] = useState(false);
  const [onLoad, setOnload] = useState(false);

  const changeBackgroundNavbar = () => {
    if(window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  const changePositionGoTop = () => {
    if(window.scrollY >= 450) {
      setGoTopActive(true);
    } else {
      setGoTopActive(false);
    }
  }

  const changeOnloadEvent = () => {
    if (!onLoad) setOnload(true);
  }


  window.addEventListener('scroll',changeBackgroundNavbar);
  window.addEventListener('scroll',changePositionGoTop);
  window.addEventListener('load',changeOnloadEvent);

  return (
      <div className="App">
            <Header navbar={navbar}/>
            <Routes>
              <Route axact path="/" element={<HomePage  navbar={navbar} gotopActive={gotopActive} onLoad={onLoad}/>}/>
              <Route axact path="/about" element={<AboutPage/>}/>
              <Route axact path="/pages" element={<Pages/>}/>
              <Route axact path="/shop" element={<ShopPages/>}/>
            </Routes>
            <Footer />
      </div>
  );
}

export default App;

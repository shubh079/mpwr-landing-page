import "./App.css";
import Header from "./components/layouts/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <>
     {/* <Header /> */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404 page not found!</>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
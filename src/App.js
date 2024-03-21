import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landpage from "./pages/landpage/Landpage";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/navbar" element={<Layout />}>
          <Route path="about" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

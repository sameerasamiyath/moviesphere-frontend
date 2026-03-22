import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/temp";
import Player from "./pages/Player";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import People from "./pages/People";
import Series from "./pages/Series";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/projects" element={<NotFound />} />
        <Route path="/gallery" element={<NotFound />} />
        <Route path="/blog" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

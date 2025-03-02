import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;

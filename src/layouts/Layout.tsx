import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between max-w-[2000px] mx-auto">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

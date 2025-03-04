import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col max-w-[2000px] mx-auto mt-2">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

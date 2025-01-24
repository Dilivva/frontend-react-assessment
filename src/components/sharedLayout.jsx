import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { Footer } from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../utils/context";
import { GlobalLoadingIcon } from "./globalLoading";

export const SharedLayout = () => {
  const { globalLoading } = useGlobalContext();
  return (
    <div className=" flex flex-col h-screen">
      {globalLoading && <GlobalLoadingIcon />}
      <div className=" px-[2vw] md:px-[4vw] pt-4">
        <ToastContainer theme="dark" autoClose={3000} />
        <NavBar />
        <Outlet />
      </div>
      <div className=" mt-auto">
        <Footer />
      </div>
    </div>
  );
};

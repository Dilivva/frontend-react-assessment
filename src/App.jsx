import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url, "url");

  useEffect(() => {
    featchApiConfig();
  }, []);

  const Access_key = import.meta.env.VITE_APP_TMBD_API_KEY;

  const featchApiConfig = () => {
    fetchDataFromApi(`/configuration?api_key=${Access_key}`).then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import New from "../pages/New";
import Header from "../components/Header";
import Metrics from "../pages/Metrics";
import OpenUrl from "../pages/OpenUrl";

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/new" element={<New />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/open" element={<OpenUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

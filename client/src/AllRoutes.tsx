// import React from 'react'
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import ViewProject from "./pages/ViewProject/ViewProject";
import Home from "./pages/Home/Home";
import FindFreelancers from "./pages/FindFreelancers/FindFreelancers";
import FindWork from "./pages/FindWork/FindWork";
import PostProject from "./pages/PostProject/PostProject";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-freelancer" element={<FindFreelancers />} />
      <Route path="/find-work" element={<FindWork />} />
      <Route path="/post-project" element={<PostProject />} />
      <Route path="/log-in" element={<SignIn />} /> 
      <Route path="/view-project" element={<ViewProject />} />
    </Routes>
  );
}

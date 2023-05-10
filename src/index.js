import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Error = React.lazy(() => import("./components/Error/Error"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Locations = React.lazy(() => import("./pages/Locations/Locations"));
const About = React.lazy(() => import("./pages/About/About"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Register = React.lazy(() => import("./pages/Register/Register"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Loading />} />

          <Route element={<SharedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
);

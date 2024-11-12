import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Signin } from "./Component/Signin";
// import { Register } from "./Component/Register";
import Home from "./Component/Home";
import { ToastContainer } from "react-toastify";

function Router() {
  return (
    <div>
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter basename="/watchs-app">
        <Routes>
          <Route exact path="/" element={<Home />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
// <Route exact path="/Signin" element={<Signin />} />
// <Route exact path="/Register" element={<Register />} />
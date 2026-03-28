import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <div className="bg-black h-screen w-full fixed z-50 flex items-center justify-center opacity-85">
          <i className="ph ph-circle-notch animate-spin text-9xl text-white"></i>
        </div>
      )}
      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 animate-fadeInUp text-white">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

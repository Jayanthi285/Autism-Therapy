import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoPage from "./autism/LogoPage";
import Login from "./autism/Login";
import Signup from "./autism/Signup";
import Home from "./autism/Home";
import AssessmentForm from "./autism/AssessmentForm";
import Contact from "./autism/Contact";
import Therapy from "./autism/Therapy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/assessment" element={<AssessmentForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/therapy" element={<Therapy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

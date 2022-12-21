import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import JuicePage from "./pages/JuicePage";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/juice" element={<JuicePage />} />
      </Routes>
    </>
  );
}

export default App;

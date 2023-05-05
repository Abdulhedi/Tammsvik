import React from "react";
import Start from "./pages/start";
import { Routes, Route, useNavigate } from "react-router";
import Chat from "./pages/chat";
import Hue from "./pages/hue";
import carrot from "./assets/Carrot-Digital-black.svg";
import "./App.css";
import Chatgpt from "./pages/chatgpt";
import Bravo from "./pages/bravo";

function App() {
  let navigate = useNavigate();
  const handleNavigate = (nav: string) => {
    navigate(nav);
  };
  return (
    <div className="App">
      <header>
        <div className="menu">
          <div onClick={() => handleNavigate("/")} className={"homeAnchor"}>
            <img src={carrot} className="homeLogo" alt="home" />
          </div>
          <div onClick={() => handleNavigate("/hue")}>Hue</div>
          <div onClick={() => handleNavigate("/chat")}>Chat GPT</div>
          <div onClick={() => handleNavigate("/chatgpt")}>
            Chat GPT exempel 2
          </div>
          <div onClick={() => handleNavigate("/bravo")}>
            Bravo
          </div>
        </div>
      </header>
      <main className="App-body">
        <Routes>
          <Route path={""} element={<Start />} />
          <Route path={`hue`} element={<Hue />} />
          <Route path={`chat`} element={<Chat />} />
          <Route path={`chatgpt`} element={<Chatgpt />} />
          <Route path={`bravo`} element={<Bravo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

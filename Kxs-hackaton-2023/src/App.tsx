import React from "react";
import Start from "./pages/start";
import { Routes, Route, useNavigate } from "react-router";
import Chat from "./pages/chat";
import Hue from "./pages/hue";
import carrot from "./assets/Carrot-Digital-black.svg";
import "./App.css";
import Chatgpt from "./pages/chatgpt";
import Bravo from "./pages/bravo";
import Answers from "./pages/answers";
import { AnswerProvider } from './providers/hueProvider';
import Echo from "./pages/echo";

function App() {
  let navigate = useNavigate();
  const handleNavigate = (nav: string) => {
    navigate(nav);
  };
  return (
    <div className="App">
      <AnswerProvider>
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
          <div onClick={() => handleNavigate("/bravo")}>Bravo</div>
          <div onClick={() => handleNavigate("/answers")}>Photo gallery </div>
          <div onClick={() => handleNavigate("/echo")}>Echo </div>
        </div>
      </header>
      <main className="App-body">
        <Routes>
          <Route path={""} element={<Start />} />
          <Route path={`hue`} element={<Hue />} />
          <Route path={`chat`} element={<Chat />} />
          <Route path={`chatgpt`} element={<Chatgpt />} />
          <Route path={`bravo`} element={<Bravo />} />
          <Route path={`answers`} element={<Answers />} />
          <Route path={`echo`} element={<Echo />} />
        </Routes>
      </main>
      </AnswerProvider>
    </div>
  );
}

export default App;

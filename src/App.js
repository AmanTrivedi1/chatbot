import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import config from "./chatbot/config";
import MessageParser from "./chatbot/messageParsers";
import ActionProvider from "./chatbot/actionProvider";
import { useSelector } from "react-redux";
import Final from "./chatbot/final";

function App() {
  const page3 = useSelector((state) => state.counter.page3);

  const [enroll, setEnroll] = useState(false);

  function handleChange() {
    setEnroll(true);
  }
  return (
    <>
      {enroll ? (
        page3 ? (
          <Final />
        ) : (
          <div className="App">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )
      ) : (
        <div className=" h-screen bg-gradient-to-r flex items-center justify-center flex-col from-blue-700 via-blue-800 to-gray-900">
          <h2 className="lg:text-6xl mb-2 text-4xl text-center text-white font-bold font-Poppins">
            Enter Into Student
            <br /> Info System
          </h2>
          <button
            className="border mt-2 text-black px-2 py-2 rounded-md bg-white"
            onClick={handleChange}
          >
            Enroll Now!
          </button>
        </div>
      )}
    </>
  );
}

export default App;

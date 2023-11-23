import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import AgeDropdown from "./SchuduleDropdown";

import { useDispatch } from "react-redux";
import { isPage } from "../redux/counterSlice";
import Countdown from "./Countdown";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGot = () => {
    const message = createClientMessage("Got it!");
    const botMessage = createChatBotMessage("Enter Your Name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, botMessage],
    }));
  };
  const showSchuduleDropdown = (age) => {
    const botMessage = createClientMessage(age);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, age],
    }));
    handleNumber();
  };
  const handleName = () => {
    const botMessage = createChatBotMessage(
      <AgeDropdown showSchuduleDropdown={showSchuduleDropdown} />
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNumber = () => {
    const botMessage = createChatBotMessage(<Countdown />);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    setTimeout(() => {
      handleFinal();
    }, 5000);
  };

  const handleFinal = () => {
    dispatch(isPage(true));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleName,
            handleNumber,
            handleGot,
            showSchuduleDropdown,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

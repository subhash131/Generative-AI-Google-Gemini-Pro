"use client";
import React, { useContext } from "react";
import Input from "./Input";
import Conversation from "./Conversation";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import { AIContext } from "@/context/StateContext";
import Typing from "./Typing.tsx";

const Chat = () => {
  const context = useContext(AIContext);

  return (
    <div className="w-full h-screen flex flex-col">
      <Conversation>
        {context?.messages.map(({ message, sender }, index) => {
          return (
            <div key={`conversation-${index}`}>
              {sender === "user" && <SentMessage>{message}</SentMessage>}
              {sender === "ai" && <ReceivedMessage>{message}</ReceivedMessage>}
            </div>
          );
        })}
        {context?.isLoading && <Typing />}
      </Conversation>
      <Input />
    </div>
  );
};

export default Chat;

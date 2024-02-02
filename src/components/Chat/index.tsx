"use client";
import React, { useContext } from "react";
import Input from "./Input";
import Conversation from "./Conversation";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import StateContext, { AIContext } from "@/context/StateContext";

const Chat = () => {
  const context = useContext(AIContext);
  // console.log("context: ", context?.messages);

  return (
    <div className="w-full h-screen flex flex-col">
      <Conversation>
        {context?.messages.map(({ message, sender }, index) => {
          return (
            <>
              {sender === "user" && (
                <SentMessage key={`conversation-${index}`}>
                  {message}
                </SentMessage>
              )}
              {sender === "ai" && (
                <ReceivedMessage key={`conversation-${index}`}>
                  {message}
                </ReceivedMessage>
              )}
            </>
          );
        })}
      </Conversation>
      <Input />
    </div>
  );
};

export default Chat;

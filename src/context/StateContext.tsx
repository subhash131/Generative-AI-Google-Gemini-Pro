"use client";
import useGeminiPro from "@/hooks/gemini/useGeminiPro";
import React, { useState } from "react";
import { createContext } from "react";

interface AIContext {
  handleMessageInput: (value: string) => void;
  generateGeminiProResponse: () => void;
  addMessage: ({ newMessage }: { newMessage: MessageType }) => void;
  inputMessage: string;
  messages: MessageType[];
  handleSubmit: () => void;
}

type MessageType = {
  message: string;
  sender: string;
};
export const AIContext = createContext<AIContext | undefined>(undefined);

const ContextComp = ({ children }: { children: React.ReactNode }) => {
  const [inputMessage, setInputMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      message: "Hi, this is subhash",
      sender: "ai",
    },
    {
      message: `python def greet_user(name): """Prints a greeting to the user.""" print(f"Hello, {name}!") # Get the user's name from the command line. user_name = input("What is your name? ") # Greet the user. greet_user(user_name)`,
      sender: "ai",
    },
  ]);

  const addMessage = ({ newMessage }: { newMessage: MessageType }) => {
    setMessages((state) => [...state, newMessage]);
    setInputMessage("");
  };

  const geminiProGenerator = useGeminiPro();

  const generateGeminiProResponse = async () => {
    const response = await geminiProGenerator({ query: inputMessage });
    const newMessage = { message: response, sender: "ai" };
    addMessage({ newMessage });
  };

  const handleMessageInput = (value: string) => {
    setInputMessage(value);
  };
  const handleSubmit = () => {
    generateGeminiProResponse();
  };
  return (
    <AIContext.Provider
      value={{
        inputMessage,
        messages,
        handleSubmit,
        addMessage,
        handleMessageInput,
        generateGeminiProResponse,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};

export default ContextComp;

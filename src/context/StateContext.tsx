"use client";
import useGeminiPro from "@/hooks/gemini/useGeminiPro";
import React, { useRef, useState } from "react";
import { createContext } from "react";

interface AIContext {
  handleMessageInput: (value: string) => void;
  generateGeminiProResponse: () => void;
  addMessage: ({ newMessage }: { newMessage: MessageType }) => void;
  inputMessage: string;
  messages: MessageType[];
  handleSubmit: () => void;
  isLoading: boolean;
}

type MessageType = {
  message: string;
  sender: string;
};
export const AIContext = createContext<AIContext | null>(null);

const ContextComp = ({ children }: { children: React.ReactNode }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      message: "Hi, this app is built by subhash",
      sender: "ai",
    },
    {
      message: "For work contact me at subhashnayak131@gmail.com",
      sender: "ai",
    },
    {
      message:
        "This application uses Google's Gemini Pro Generative Model to generate the response",
      sender: "ai",
    },
    {
      message: "Give it a try...",
      sender: "ai",
    },
  ]);

  const geminiProGenerator = useGeminiPro();

  const addMessage = ({ newMessage }: { newMessage: MessageType }) => {
    setMessages((state) => [...state, newMessage]);
    if (newMessage.sender === "user") setInputMessage("");
  };

  const generateGeminiProResponse = async () => {
    setIsLoading(true);
    const response = await geminiProGenerator({ query: inputMessage });
    const newMessage = { message: response, sender: "ai" };
    addMessage({ newMessage });
    setIsLoading(false);
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
        messages,
        isLoading,
        inputMessage,
        addMessage,
        handleSubmit,
        handleMessageInput,
        generateGeminiProResponse,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};

export default ContextComp;

"use client";
import { AIContext } from "@/context/StateContext";
import { Image, SendHorizonal } from "lucide-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const Input = () => {
  const context = useContext(AIContext);

  const handleSend = () => {
    if (context?.inputMessage) {
      context?.addMessage({
        newMessage: { message: context.inputMessage, sender: "user" },
      });
      context?.handleSubmit();
    }
  };

  return (
    <div className="flex gap-4 items-center p-4 w-[90%]">
      <div
        className="relative p-2 cursor-pointer "
        onClick={() => {
          toast.error("Cannot upload image right now!");
        }}
      >
        <Image className="pointer-events-none" />
        {/* <input
          type="file"
          className="top-0 left-0 opacity-0 w-full h-full absolute cursor-pointer"
        /> */}
      </div>
      <textarea
        placeholder="Type Your Query.."
        className="resize-none bg-transparent border border-[#222323] px-4 text-sm w-full rounded-xl p-1 min-h-12 py-2 h-fit"
        onChange={(e) => {
          context?.handleMessageInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (
            e.key.toLowerCase() === "enter" &&
            context?.inputMessage.trim() !== ""
          ) {
            e.preventDefault();
            handleSend();
          }
        }}
        value={context?.inputMessage}
      />
      <button
        className="border rounded-full p-2 grid place-content-center"
        onClick={handleSend}
      >
        <SendHorizonal size={20} />
      </button>
    </div>
  );
};

export default Input;

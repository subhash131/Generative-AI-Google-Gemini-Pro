import { AIContext } from "@/context/StateContext";
import React, { useContext, useEffect, useRef } from "react";

const Conversation = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(AIContext);
  const conversationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [context?.isLoading]);

  return (
    <div
      className="flex-grow bg-red-00 px-10 pt-10 h-[90vh] overflow-y-scroll flex flex-col w-[90%] gap-6 text-sm"
      ref={conversationRef as React.MutableRefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
};

export default Conversation;

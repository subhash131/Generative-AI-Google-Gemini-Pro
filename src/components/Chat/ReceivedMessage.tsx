import React from "react";
import Highlight from "react-highlight";

const ReceivedMessage = ({ children }: { children: React.ReactNode }) => {
  // ml-auto p-4 border border-gray-600 rounded-3xl rounded-tr w-fit max-w-[80%]
  return (
    <div className="ml-0 p-4 bg-[#222323] border border-gray-600 rounded-3xl rounded-tl w-fit max-w-[80%]">
      <p>{children}</p>
    </div>
  );
};

export default ReceivedMessage;

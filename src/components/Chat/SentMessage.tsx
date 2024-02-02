import React from "react";

const SentMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-auto p-4 border border-gray-600 rounded-3xl rounded-tr w-fit max-w-[80%] max-md:max-w-full break-words">
      <p>{children}</p>
    </div>
  );
};

export default SentMessage;

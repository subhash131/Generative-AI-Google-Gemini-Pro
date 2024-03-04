import React from "react";

const ReceivedMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-0 p-4 bg-[#222323] border border-gray-600 rounded-3xl rounded-tl w-fit max-w-[80%] max-md:max-w-full break-words">
      <p>{children}</p>
    </div>
  );
};

export default ReceivedMessage;

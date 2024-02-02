import React from "react";

const Conversation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow bg-red-00 px-10 pt-10 h-[90vh] overflow-y-scroll flex flex-col w-[90%] gap-6 text-sm">
      {children}
    </div>
  );
};

export default Conversation;

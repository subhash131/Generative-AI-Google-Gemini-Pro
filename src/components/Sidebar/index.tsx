import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-96 bg-black border-r border-[#1B1B1A] h-screen p-4 flex flex-col gap-10">
      <div className="w-full h-14 flex gap-2 items-center">
        <div className="rounded-full overflow-hidden">
          <Image
            src="/leo_magnificus.png"
            alt=""
            width={50}
            height={50}
            className="rounded-full object-cover"
            draggable={false}
          />
        </div>
        <div>
          <p className="text-xs">Code By</p>
          <Link href="mailto:subhashnnayak131@gmail.com" className="flex gap-2">
            <p className="text-sm">Subhash Nayak</p>
            <Mail size={20} className="inline-block" />
          </Link>
        </div>
      </div>
      <div className="bg--100 w-full h-full flex flex-col gap-2">
        <div className="bg-[#222323] p-2 rounded border border-gray-500 text-sm">
          <p>Explore</p>
        </div>
        <div className="p-2 rounded  text-sm">
          <p>Example 3</p>
        </div>
        <div className="p-2 rounded  text-sm">
          <p>Example 2</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

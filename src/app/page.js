import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div class="inline-flex">
          <Link
            href={"/login"}
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            login
          </Link>
          <Link
            href={"/dashboard"}
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;

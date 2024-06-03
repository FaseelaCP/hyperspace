import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-4">
        <Link
          href="./button-popup"
          className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded-full border border-blue-500"
        >
          Button & Popup Page
        </Link>
        <Link
          href="./creative"
          className="text-green-500 hover:text-green-700 font-bold py-2 px-4 rounded-full border border-green-500"
        >
          Creative Page
        </Link>
      </div>
    </div>
  );
}

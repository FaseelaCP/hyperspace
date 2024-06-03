import React from "react";
import Link from "next/link";

export default function Button() {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('college_student.jpeg')" }}>
      <Link href={'./components/popup'}>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full">
          Click Me!
        </button>
      </Link>
    </div>
  );
}

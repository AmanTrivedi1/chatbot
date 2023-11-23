import React from "react";
import { useSelector } from "react-redux";

const Final = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className=" h-screen text-white text-2xl text-center bg-gradient-to-r flex items-center justify-center flex-col from-blue-700 via-blue-800 to-gray-900">
      Your name is Anmol schedul for{" "}
      <span className="text-black font-bold text-4xl">{count}</span> has been
      added to student system. You may now exit.
    </div>
  );
};
export default Final;

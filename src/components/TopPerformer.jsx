import React from "react";
import data from "../data.json";

const TopPerformer = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="my-4 text-2xl text-center font-semibold">Top Students</h2>
      <div className="flex overflow-x-auto scrollbar-hide">
        {data.students.map((student, index) => (
          <div
            className="min-w-64 mx-2 my-4 bg-slate-100 rounded-lg shadow-md"
            key={index}
          >
            <div className="w-full h-36">
              <img
                className="rounded-t-lg w-full h-full"
                src={student.image}
                alt={student.name}
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {student.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 text-justify">
                {student.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformer;

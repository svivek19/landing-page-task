import React, { useEffect } from "react";
import data from "../data.json";

const Classes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24 w-full max-w-screen-lg mx-auto">
      {data.neet_courses.map((course, index) => (
        <div
          className="flex flex-col rounded-lg text-surface md:flex-row md:space-x-6 my-6"
          key={index}
        >
          <div className="w-full md:w-1/3 h-48 md:h-44">
            <img
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              src={course.image_url}
              alt={course.name}
            />
          </div>
          <div className="flex flex-col justify-start flex-1 px-6 py-4 md:p-0">
            <h5 className="mb-2 text-xl font-medium">{course.name}</h5>
            <p className="mb-3 text-base">{course.description}</p>
            <button className="bg-slate-800 text-white px-6 py-2 rounded-md text-xl self-start">
              Practice
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;

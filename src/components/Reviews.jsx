import React, { useRef, useEffect } from "react";
import data from "../data.json";

const Reviews = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 2;
  const scrollIntervalDuration = 50;

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          container.scrollLeft += scrollSpeed;
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft = 0;
          } else if (container.scrollLeft % container.clientWidth === 0) {
            clearInterval(scrollInterval);
            setTimeout(() => {
              container.scrollLeft += 1;
              startScrolling();
            }, 0);
          }
        }
      }, scrollIntervalDuration);
    };

    startScrolling();

    // Cleanup function
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="my-4 text-2xl text-center font-semibold">Reviews</h2>
      <div className="flex overflow-x-auto scrollbar-hide" ref={containerRef}>
        {data.students.map((student, index) => (
          <div
            className="min-w-80 mx-2 my-4 bg-slate-50 rounded-lg shadow-md"
            key={index}
          >
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 ">
                {student.name}
              </h5>
              <p className="mb-3 font-normal text-gray-400 text-justify">
                {student.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

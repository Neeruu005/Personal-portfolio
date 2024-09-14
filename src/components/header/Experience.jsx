import React from "react";
import myImage from "/src/assets/ictacademy.jpg";
import my from "/src/assets/ybi.webp";

const Experience = () => {
  return (
    <div className="min-h-screen  text-gradient-to-b from-gray-900 to-black p-10">
      <h2 className=" mb-8 text-black md:text-5xl text-4xl text-heading font-bold text-center">
        Experience
      </h2>
      <div className="grid items-center justify-center col-span-4">
        <div className="relative border-l-4 border-purple-600 pl-10   ">
          <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-md w-84 text-white w-[31rem] ">
            <div className="flex items-center">
              <div className="bg-purple-600 text-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full -ml-[6rem]">
                <img src={myImage} alt="ICT Academy" className="w-10 h-10 rounded-[5px]" />
              </div>
              <h3 className="ml-8 text-2xl font-semibold">
                Web Development Internship
              </h3>
            </div>
            <p className="text-gray-400 mt-2">ICT Academy</p>
            <p className="text-gray-400 mt-2">Sep 2023 - Oct 2023</p>
            <p className="mt-2">
              Completed one-month virtual internship in web development at ICT
              Academy, gaining hands-on experience with HTML, CSS, JS.
              Demonstrated effective collaboration and proficiency in Capstone
              Studio project.
            </p>
            <p className="mt-2">
              <strong>Skills:</strong> HTML, CSS, JavaScript
            </p>
          </div>

          <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-md w-84 text-white w-[31rem] ">
            <div className="flex items-center">
              <div className="bg-green-600 text-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full  -ml-[6rem]">
                <img src={my} alt="SecureDapp" className="w-10 h-10" />
              </div>
              <h3 className="ml-8 text-2xl font-semibold">
                Data Science and AIML Internship
              </h3>
            </div>
            <p className="text-gray-400 mt-2">ybi foundation</p>
            <p className="text-gray-400 mt-2">Sep 2024 - Present</p>
            <p className="mt-2">
              Gained practical experience in data analysis, machine learning,
              and AI model development. Worked with Python libraries like
              Pandas, NumPy, Scikit-learn, and explored deep learning using
              TensorFlow and Keras. Developed real-world projects, enhancing
              skills in data handling and AI-driven solutions.
            </p>
            <p className="mt-2">
              <strong>Skills:</strong> React JS, JavaScript, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

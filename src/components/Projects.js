import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';

const Projects = () => {
  const { projects } = useSelector((state) => state.projectsSli);
  return (
    <div className="flex flex-col items-center pt-12">
      <h3 className="py-4">My Projects</h3>
      <p className="w-4/6 text-center">
        I have spent 2000+ hours working on full-stack web projects for Start
        ups, mid-sized and corporate organizations for academic purposes in
        React & Redux (8+ projects), Ruby on Rails (6+ projects), Java (2
        projects), PHP (6+ projects) and other basic front end projects (4+
        projects)
      </p>
      <form className="p-6 w-5/6">
        <input
          className="bg-gray-50 w-full rounded-lg text-gray-900 text-sm border-gray-300 border-2 focus:outline-none focus:border-amber-400 px-4 py-2 dark:bg-gray-800 dark:text-gray-100"
          type="text"
          name="title"
          placeholder="Search for projects by technology; e.g. React, Redux, Ruby on Rails, Java, PHP, etc."
        />
      </form>
      <Cards items={projects} />
      <button
        className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-md p-3 my-10 px-6"
        type="button"
      >
        LOAD MORE . . .
      </button>
    </div>
  );
};
export default Projects;

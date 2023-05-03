import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from './Cards';
import { searchProjects } from '../redux/projects';

const Projects = () => {
  const { projects, searchedProjects } = useSelector(
    (state) => state.projectsSli,
  );
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    title: '',
  });

  const handleSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    dispatch(searchProjects(search.title));
  };

  const displayedProjects = searchedProjects.length !== 0 ? searchedProjects : projects;
  return (
    <div className="flex flex-col items-center">
      <h3 className="py-4 font-bold">My Projects</h3>
      <form className="p-6 w-5/6">
        <input
          className="transform hover:scale-105 transition duration-300 ease-in-out bg-gray-50 w-full rounded-lg text-gray-900 text-sm border-gray-300 border-2 focus:outline-none focus:border-amber-400 px-4 py-2 dark:bg-gray-800 dark:text-gray-100"
          type="text"
          name="title"
          placeholder="Search for projects by technology; e.g. React, Redux, Ruby on Rails, Java, PHP, etc."
          onChange={handleSearch}
        />
      </form>
      <Cards items={displayedProjects} />
    </div>
  );
};

export default Projects;

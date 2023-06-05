import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from './Cards';
import { searchProjects } from '../redux/projects';
// eslint-disable-next-line import/no-named-as-default
import Modal from './Modal';

const Projects = () => {
  const { projects, searchedProjects } = useSelector(
    (state) => state.projectsSli
  );

  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [selectedProject, setSelectedProject] = useState(null); // State to store selected project

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

  const handleModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const displayedProjects =
    searchedProjects.length !== 0 ? searchedProjects : projects;
  return (
    <div id="projects" className="flex flex-col items-center">
      <h3 className="py-2 flex font-extrabold place-self-start text-xl w-full bg-[rgb(25,25,25)]">
        <span className="w-1/3">My Projects</span>
        <span className="bottom-0 left-0 w-full h-0.5 bg-amber-500 mt-4" />
      </h3>
      <form className="p-6 w-5/6">
        <input
          className="transform hover:scale-105 transition duration-300 ease-in-out bg-gray-50 w-full text-gray-900 text-sm border-gray-300 border-2 focus:outline-none focus:border-amber-400 px-4 py-2 dark:bg-gray-800 dark:text-gray-100"
          type="text"
          name="title"
          placeholder="Search for projects by technology; e.g. React, Redux, Ruby on Rails, Java, PHP, etc."
          onChange={handleSearch}
        />
      </form>
      <Cards items={displayedProjects} handleModal={handleModal} />
      {modalOpen && (
        <Modal project={selectedProject} handleClose={handleModalClose} />
      )}
    </div>
  );
};

export default Projects;

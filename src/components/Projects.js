import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';

const Projects = () => {
  const { projects } = useSelector((state) => state.projectsSli);
  return (
    <div className="flex flex-col align-center">
      <h3>My Projects</h3>
      <p>
        I have spent 2000+ hours working on full-stack web projects for Start
        ups, mid-sized and corporate organizations for academic purposes in
        React & Redux (8+ projects), Ruby on Rails (6+ projects), Java (2
        projects), PHP (6+ projects) and other basic front end projects (4+
        projects)
      </p>
      <div>
        <form className="">
          <input type="text" name="title" />
        </form>
      </div>
      <Cards items={projects} />
    </div>
  );
};
export default Projects;

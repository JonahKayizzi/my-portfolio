import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: {
    frontend: [
      { name: 'Javascript', level: 2 },
      { name: 'React & Redux', level: 1 },
      { name: 'HTML5 & CSS3', level: 4 },
      { name: 'TypeScript', level: 0.5 },
    ],
    backend: [
      { name: 'Ruby on Rails', level: 1 },
      { name: 'PHP', level: 3 },
      { name: 'Java', level: 1 },
      { name: 'MySQL', level: 4 },
      { name: 'PostgreSQL', level: 1 },
    ],
    languages: [{ name: 'Embedded C', level: 1 }],
    tools: [
      'Git',
      'Gitflow',
      'GitHub',
      'Chrome Dev Tools',
      'Figma',
      'Kanban boards',
      'Netlify',
      'GitHub pages',
      'Render',
      'Jest',
      'RSpec',
      'Swagger',
      'JWT',
      'Devise',
      'ESlint',
      'rubocop',
      'Linters',
    ],
    softskills: [
      'Teamwork',
      'Communication',
      'Problem Solving',
      'Time Management',
      'Remote Work',
      'Pair Programming',
      'TDD',
      'DRY',
      'YAGNI',
      'KISS',
      'SOLID',
      'Mentorship',
    ],
    aviation: [
      'Flight Plan Validation & Approval',
      'NOTAM Management',
      'Communication Operations with AMHS & AFTN',
      'Flight Cordination with AMS',
      'Aeronautical Chart Production with AutoCAD & Bentley',
      'AIP Management with FrameMaker',
      'Aeronautical Static Data Maintanance',
      'AIXM Dataset Management',
    ],
  },
};

const skillsSlice = createSlice({
  name: 'skillsSl',
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;

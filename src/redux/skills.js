import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: {
    frontend: [
      { name: 'Javascript', level: 2 },
      { name: 'HTML5 & CSS3', level: 4 },
      { name: 'TypeScript', level: 1 },
      { name: 'TailwindCSS', level: 1 },
    ],
    backend: [
      { name: 'PHP', level: 3 },
      { name: 'Java', level: 1 },
      { name: 'MySQL', level: 4 },
      { name: 'PostgreSQL', level: 1 },
    ],
    frameworks: [
      { name: 'React & Redux', level: 1 },
      { name: 'Ruby on Rails', level: 1 },
      { name: 'Spring Boot', level: 2 },
      { name: 'Yii PHP', level: 1 },
    ],
    tools: [
      'Agile/Scrum',
      'Git',
      'git-flow',
      'GitHub',
      'REST API',
      'Testing',
      'Chrome Dev Tools',
      'Figma',
      'Kanban boards',
      'Netlify',
      'GitHub pages',
      'Render',
      'Jest',
      'RSpec',
      'Capybara',
      'React Testing Library',
      'Swagger',
      'JWT',
      'Devise',
      'ESlint',
      'rubocop',
      'Linters',
      'Linux',
    ],
    softskills: [
      'Teamwork',
      'Communication',
      'Leadership',
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

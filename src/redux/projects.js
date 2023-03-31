import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      name: 'Air Navigation Services - Safety Management System',
      rank: 1,
      source: 'private',
      demo: 'private',
      images: ['ans-sms.png'],
      tools: [
        'PHP',
        'Yii Framework',
        'Java',
        'React',
        'microservices',
        'Hibernate',
        'CentOS',
        'MySQL',
        'Kanban',
      ],
      description:
        'Upgrade and migration to Java. A web application for staff of ANS to report and analyze aircraft and other workplace incidents, occurrences, or hazards.',
    },
    {
      name: 'Doctor Reservations',
      rank: 2,
      source: 'https://github.com/JonahKayizzi/doctors-reservations-frontend',
      demo: 'https://doctors-reservations.netlify.app/',
      image: ['doctors-reservations.png'],
      tools: [
        'React',
        'Ruby on Rails',
        'PostgreSQL',
        'Redux',
        'Git & Gitflow',
        'Rest API',
        'Swagger',
        'Render',
        'Netlify',
        'Kanban',
      ],
      description:
        'A responsive web application that enables users add add, remove and schedule appointments with doctors. The application runson two independent applications, a React front end that consumes API endpoints of a Rails backend',
    },
    {
      name: 'Budget App',
      rank: 3,
      source: 'https://github.com/JonahKayizzi/Budget-App-RoR',
      demo: 'https://budget-app-r5on.onrender.com/',
      image: ['budget-app.png'],
      tools: [
        'ERD',
        'Ruby on Rails',
        'PostgreSQL',
        'ORM',
        'Git & Gitflow',
        'Devise',
      ],
      description:
        'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    },
    {
      name: 'Space Travellers Hub',
      rank: 4,
      source: 'https://github.com/JonahKayizzi/space-travellers-hub',
      demo: 'https://cosmic-sundae-27c46b.netlify.app/missions',
      image: ['spacex-app.png'],
      tools: [
        'Redux',
        'React',
        'Space X API',
        'Netlify',
        'Git & Gitflow',
        'Jest',
      ],
      description:
        'The Space Travellers hub is web application that works with real live data from the SpaceX API. The app is for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projectSli',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;

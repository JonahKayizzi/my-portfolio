import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      name: 'Doctor Reservations',
      rank: 2,
      source: 'https://github.com/JonahKayizzi/doctors-reservations-frontend',
      demo: 'https://doctors-reservations.netlify.app/',
      images: ['images/DOCTORS.jpg'],
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
      name: 'Space Travellers Hub',
      rank: 4,
      source: 'https://github.com/JonahKayizzi/space-travellers-hub',
      demo: 'https://cosmic-sundae-27c46b.netlify.app/',
      images: ['images/SPACEX.jpg'],
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
    {
      name: 'Bit Ticker',
      rank: 5,
      source: 'https://github.com/JonahKayizzi/BitTicker',
      demo: 'https://roaring-swan-c9fce0.netlify.app/',
      images: ['images/BitTickerMobile.png'],
      tools: [
        'REST API',
        'React',
        'Redux',
        'Jest',
        'React Testing Library',
        'JavaScript',
      ],
      description:
        'Your final stop for crypto statistics and analysis. BitTicker is a mobile web application that displays a list of metrics (crypto statistics) via a public API.',
    },
    {
      name: 'Book Store',
      rank: 6,
      source: 'https://github.com/JonahKayizzi/bookstore-react-redux',
      demo: 'https://stellular-torrone-7d081a.netlify.app/',
      images: ['images/bookstore.png'],
      tools: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
      description:
        'The Bookstore is a web application created with using MVP. The app displays a list of books, and the user can add a book, remove a selected book.',
    },
    {
      name: 'To Do List',
      rank: 7,
      source: 'https://github.com/JonahKayizzi/To-do-app-with-React',
      demo: 'https://incredible-alfajores-408a44.netlify.app/',
      images: ['images/TODO.jpg'],
      tools: ['React', 'Linters', 'JavaScript', 'Gitflow', 'HTML5', 'CSS3'],
      description:
        'This is a To do app developed using React & Lifecycle methods to consolidate knowledge about React, components, props, state, hooks and react router. A user can add, delete, updated and mark items as completed',
    },
    {
      name: 'Math Magicians',
      rank: 8,
      source: 'https://github.com/JonahKayizzi/Calculator-App-React',
      demo: 'https://teal-druid-4505fc.netlify.app/',
      images: ['images/calculator.png'],
      tools: ['React', 'Linters', 'JavaScript', 'Gitflow', 'HTML5', 'CSS3'],
      description:
        'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    },
    {
      name: 'Leaderboard',
      rank: 9,
      source: 'https://github.com/JonahKayizzi/Leaderboard',
      demo: 'https://jonahkayizzi.github.io/Leaderboard/dist/',
      images: ['images/leaderboard.jpg'],
      tools: [
        'React',
        'Linters',
        'JavaScript',
        'Gitflow',
        'HTML5',
        'CSS3',
        'webpack',
        'REST API',
        'JSON',
      ],
      description:
        'The Leaderboard App displays scores submitted by different players, allows you to submit your score and all data is preserved in the Leaderboard API service.',
    },
  ],
  searchedProjects: [],
};

const projectsSlice = createSlice({
  name: 'projectSli',
  initialState,
  reducers: {
    searchProjects: (state, action) => ({
      ...state,
      // eslint-disable-next-line max-len
      searchedProjects: state.projects.filter((project) => project.tools
        .join()
        .toLowerCase()
        .includes(action.payload.toLowerCase())),
    }),
  },
});

export const { searchProjects } = projectsSlice.actions;

export default projectsSlice.reducer;

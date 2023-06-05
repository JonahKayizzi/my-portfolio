import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employments: [
    {
      id: 1,
      name: 'Microverse',
      link: 'https://www.microverse.org/',
      location: 'Remote',
      role: 'Mentor',
      type: 'Volunteer - Part Time',
      start: 'Sep 2022',
      end: 'Present',
      duration: '1 year',
      highlights: [
        'Mentored 2 junior web developers, providing technical support through code reviews.',
        'Proposed improvements to code organization to improve code quality and overall performance.',
        'Provided advice and tips on how to maintain motivation and longevity through their careers.',
      ],
    },
    {
      id: 2,
      name: 'Uganda Civil Aviation Authority',
      link: 'https://www.caa.go.ug/',
      location: 'Kampala, Uganda',
      role: 'Aeronautical Information Management',
      type: 'Full Time',
      start: 'Sep 2017',
      end: 'Present',
      duration: '6 years',
      highlights: [
        'Supervised activities for developing over 20 database-driven aeronautical charts',
        'Built a subscription management application for aeronautical products using PHP and MySQL that improved work efficiency and revenue by 70%.',
        'Led a team of 4 developers, fixed over 40 pending functional requirements of the Safety Management system in absence of the contractor and migrated from PHP to Java.',
      ],
    },
    {
      id: 3,
      name: 'Compuscan CRB (now Experian)',
      link: 'https://www.experian.co.ug/',
      location: 'Kampala, Uganda',
      role: 'Junior Data Analyst',
      type: 'Full Time',
      start: 'April 2016',
      end: 'Mar 2017',
      duration: '1 year',
      highlights: [
        'Built complex database queries (PostgreSQL) and python scripts for manipulation, extraction, and analysis of credit data of over 30 commercial banks',
        'Collaborated with the team to collect, clean, and load credit data in the bureau’s warehouse with a 1% error margin',
      ],
    },
    {
      id: 4,
      name: 'Cyber Dynamics Startup',
      location: 'Kampala, Uganda',
      role: 'Back-end Developer',
      type: 'Full Time',
      start: 'Sep 2014',
      end: 'April 2016',
      duration: '2 years',
      highlights: [
        'Built a B2B web app using PHP & MySQL for over 300 MSMEs to network in a supply/production chain',
        'Led a team of 5 developers to build a financial guide using Java to improve financial awareness among Ugandans.',
        'Designed and developed software specifications for 5 client applications including a knowledge base for the Ministry of Agriculture & an android app for a dairy farmer’s association.',
      ],
    },
    {
      id: 5,
      name: 'Huawei Technologies',
      link: 'https://www.huawei.com/',
      location: 'Kampala, Uganda',
      role: 'Carrier Software Services Engineer',
      type: 'Full Time',
      start: 'Jun 2013',
      end: 'Sep 2014',
      duration: '1 year',
      highlights: [
        'Performed level 2 back-end support comprising testing, onboarding, and issue resolution for over 30 third-party applications and over 15 aggregators for MTN Uganda',
        'Deployed of the Internet Cache system for the Warid-Airtel migration',
      ],
    },
  ],
};

const employmentsSlice = createSlice({
  name: 'employmentsSl',
  initialState,
  reducers: {},
});

export default employmentsSlice.reducer;

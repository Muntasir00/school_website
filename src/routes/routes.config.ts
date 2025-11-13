import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import type { RouteType } from './types';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import Admissions from '../pages/Admissions';
import Contact from '../pages/Contact';
import Studentlife from '../pages/Studentlife';
import Academics from '../pages/Academics';

export const routes: RouteType[] = [
  {
    path: '/',
    element: React.createElement(MainLayout),
    children: [
      { index: true, element: React.createElement(Home) },
      { path: 'about-us', element: React.createElement(About) },
      { path: 'academics', element: React.createElement(Academics) },
      { path: 'admission', element: React.createElement(Admissions) },
      { path: 'student-life', element: React.createElement(Studentlife) },
      { path: 'contact-us', element: React.createElement(Contact) },
      { path: '*', element: React.createElement(NotFound) },
    ],
  },
];

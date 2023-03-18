import React from 'react';
import { commonRouter, authRouter } from './router-confg';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      {commonRouter.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {authRouter.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

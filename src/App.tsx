import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function renderRoutes(routes: typeof import('./routes').routes) {
  return routes.map(route => {
    const { path, element, children, index } = route;

    return (
      <Route
        key={path || Math.random()}
        {...(index ? { index: true } : { path })}
        element={element}
      >
        {children && (renderRoutes(children) as any)}
      </Route>
    );
  });
}

function App() {
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
}

export default App;

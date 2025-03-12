import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Forum from './Forum';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "home", element: <Home />},
  {path: "forum", element: <Forum />}
]);

export default router;

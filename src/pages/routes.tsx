import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import InfoTeamMember from './infoteam/InfoTeamMember';
import InfoEventPage from './infosevents/[id]';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/infoteam/:id",
    element: <InfoTeamMember />,
  },
  {
    path: "/infosevents/:id",
    element: <InfoEventPage />,
},

]);

export default router;

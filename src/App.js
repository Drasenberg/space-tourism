import { Route, Routes } from "react-router-dom";
import DestinationPage from "./page/DestinationPage";
import HomePage from "./page/HomePage";
import CrewPage from './page/CrewPage';
import classes from "./styles/App.module.scss";
import TechnologyPage from "./page/TechnologyPage";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/space-tourism" element={<HomePage />} />
        <Route path="/space-tourism/home" element={<HomePage />} />
        <Route path="/space-tourism/destination/*" element={<DestinationPage />} />
        <Route path="/space-tourism/crew/*" element={<CrewPage />} />
        <Route path="/space-tourism/technology/*" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;

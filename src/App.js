import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./page/HomePage";
import classes from "./styles/App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <Navigation />
      <Routes>
        <Route path="/space-tourism/home" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

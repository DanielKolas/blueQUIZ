import { Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage/InitialPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ScorePage from "./pages/ScorePage/ScorePage";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.tata}>
      <Routes>
        <Route exact path="/" element={<InitialPage />} />
        <Route exact path="/quiz" element={<QuizPage />} />
        <Route exact path="/score" element={<ScorePage />} />
      </Routes>
    </div>
  );
}

export default App;

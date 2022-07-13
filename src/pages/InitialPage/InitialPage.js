import React from "react";
import { useNavigate } from "react-router-dom";
import CardBackground from "../../components/CardBackground";
import buttons from "../../components/Buttons.module.css";
import classes from "./InitialPage.module.css";

const InitialPage = () => {
  const navigate = useNavigate();

  function moveToQuiz() {
    navigate("/quiz", { replace: true });
  }

  return (
    <CardBackground>
      <div>
        <h1 className={classes.title}>Welcome to blueQUIZ!</h1>
        <p className={classes.description}>
          The quiz consists of 5 randomly selected questions. There is only one
          correct answer to each question. Please keep in mind that you can come
          back to the previous questions and you can select them not in the
          order. After you select all the responses, you will obtain the result.
        </p>
        <p className={classes.description}>Good luck!</p>
        <button className={buttons.mainButton} onClick={moveToQuiz}>
          Start the game!
        </button>
      </div>
    </CardBackground>
  );
};

export default InitialPage;

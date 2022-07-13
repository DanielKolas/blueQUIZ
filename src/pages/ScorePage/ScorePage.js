import React from "react";
import ScoreContext from "../../context/score-context";
import CardBackground from "../../components/CardBackground";
import classes from "./ScorePage.module.css";
import { useContext } from "react";

const ScorePage = () => {
  const changeScoreCtx = useContext(ScoreContext);
  return (
    <CardBackground>
      <h4 className={classes.title}>Your final score is:</h4>
      <h1 className={classes.points}>{changeScoreCtx.score}</h1>
      <div className={classes.note}>
        <p className={classes.noteText}>Thank you so much for playing!</p>
        <p className={classes.noteText}>Made by Daniel Kolas</p>
      </div>
    </CardBackground>
  );
};

export default ScorePage;

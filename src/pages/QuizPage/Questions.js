import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ScoreContext from "../../context/score-context";
import CardBackground from "../../components/CardBackground";
import CustomSelect from "./CustomSelect";
import buttons from "../../components/Buttons.module.css";
import classes from "./Questions.module.css";

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let tempFinalScore = 0;

const Questions = (props) => {
  const navigate = useNavigate();
  const changeScoreCtx = useContext(ScoreContext);
  const questionsData = props.questionsData;
  const [tempOptionChosen, setTempOptionChosen] = useState(null);
  const [questionChosen, setQuestionChosen] = useState(null);
  const listOfAllQustions = [];
  let listOfCorrectAnswers = [];

  for (let i = 0; i < questionsData.length; i++) {
    listOfCorrectAnswers.push(questionsData[i].correct_answer);
    listOfAllQustions.push(questionsData[i].question);
  }

  let usersAnswers = [];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersList, setAnswersList] = useState([]);

  useEffect(() => {
    const currentQuestion = questionsData[questionIndex];
    let tempAnswers = [...currentQuestion.incorrect_answers];
    tempAnswers.splice(
      getRandomNumber(currentQuestion.incorrect_answers.length),
      0,
      currentQuestion.correct_answer
    );
    setAnswersList(tempAnswers);
  }, [questionIndex, questionChosen]);

  const setQuestionIndexNextHandler = () => {
    if (questionIndex === questionsData.length - 1) {
      return;
    }
    setQuestionIndex(questionIndex + 1);
  };

  const setQuestionIndexPreviousHandler = () => {
    if (questionIndex === 0) {
      return;
    }
    setQuestionIndex(questionIndex - 1);
  };

  const checkResults = () => {
    if (props.userAnswers.includes("missing answer")) {
      alert("Please select all the answers");
    } else {
      for (let i = 0; i < props.userAnswers.length; i++) {
        if (props.userAnswers[i] == listOfCorrectAnswers[i]) {
          tempFinalScore += 1;
        }
      }
      changeScoreCtx.changeScore(tempFinalScore);
      navigate("/score", { replace: true });
    }
  };

  let ListOfQuestionForDropdown = [];
  for (let i = 0; i < listOfAllQustions.length; i++) {
    ListOfQuestionForDropdown.push({ label: listOfAllQustions[i], value: i });
  }

  function changeIndexInput(newValue) {
    setQuestionIndex(newValue.value);
  }

  return (
    <CardBackground>
      <div>
        <div className={classes.questionSelector}>
          <CustomSelect
            onChange={changeIndexInput}
            questionList={ListOfQuestionForDropdown}
          />
        </div>
        <h2 className={classes.question}>
          {questionsData[questionIndex].question}
        </h2>
        <form>
          {answersList.map((data, id) => (
            <div key={id}>
              <p
                onClick={() => {
                  setTempOptionChosen(data);
                  usersAnswers[questionIndex] = data;
                  props.updateUserAnswers(questionIndex, data);
                }}
                className={`${classes.answer} 
                ${
                  props.userAnswers[questionIndex] == data
                    ? classes.selected
                    : null
                }
              `}
              >
                {data}
              </p>
            </div>
          ))}
        </form>
        <div className={classes.buttonPosition}>
          <button
            className={`${buttons.mainButton} ${buttons.secondaryButton}`}
            onClick={setQuestionIndexPreviousHandler}
          >
            Previous
          </button>
          <button
            className={`${buttons.mainButton} ${buttons.secondaryButton}`}
            onClick={setQuestionIndexNextHandler}
          >
            Next
          </button>
        </div>
        <button
          className={`${buttons.mainButton} ${buttons.finalButton}`}
          onClick={checkResults}
        >
          Finish and check results
        </button>
      </div>
    </CardBackground>
  );
};

export default Questions;

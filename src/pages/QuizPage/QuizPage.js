import React, { useEffect, useState } from "react";
import axios from "axios";
import Questions from "./Questions";

function QuizPage() {
  const [questionsData, setQuestionsData] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);

  let userAnswers = [];
  useEffect(() => {
    const getQuestionsList = () => {
      axios
        .get("https://opentdb.com/api.php?amount=5")
        .then((res) => {
          setQuestionsData(res.data.results);
          setNumberOfQuestions(res.data.results.length);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    };
    getQuestionsList();
  }, []);

  for (let i = 0; i < numberOfQuestions; i++) {
    userAnswers[i] = "missing answer";
  }

  function updateUserAnswers(index, newValue) {
    userAnswers[index] = newValue;
  }

  return (
    questionsData && (
      <Questions
        questionsData={questionsData}
        updateUserAnswers={updateUserAnswers}
        userAnswers={userAnswers}
      />
    )
  );
}

export default QuizPage;

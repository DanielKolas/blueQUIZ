import { createContext, useState } from "react";

const ScoreContext = createContext({
  score: 0,
  changeScore: () => {},
});

export function ScoreChangeProvider(props) {
  const [scoreNumber, setScoreNumber] = useState();

  function changeScoreNumber(newScore) {
    return setScoreNumber(newScore);
  }

  const context = {
    score: scoreNumber,
    changeScore: changeScoreNumber,
  };

  return (
    <ScoreContext.Provider value={context}>
      {props.children}
    </ScoreContext.Provider>
  );
}

export default ScoreContext;

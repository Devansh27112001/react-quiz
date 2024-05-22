import Options from "./Options";

function Question({ question, dispatch, answer, points }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        // points={points}
      />
    </div>
  );
}

export default Question;

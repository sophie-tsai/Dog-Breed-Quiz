import React from "react";

function AnswerChoices(props) {
  const { handleChoice } = props;

  return (
    <div className="text-center">
      <button
        className="multiple-choice"
        onClick={(event) => handleChoice(event, props.text)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default AnswerChoices;

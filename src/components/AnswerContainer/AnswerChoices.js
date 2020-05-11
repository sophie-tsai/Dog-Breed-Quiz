import React from "react";

function AnswerChoices(props) {
  const { handleChoice } = props;
  const backgroundColor = {
    backgroundColor: props.backgroundColor,
  };
  console.log(backgroundColor);

  return (
    <div className="text-center">
      <button
        className={
          backgroundColor.backgroundColor ? `correct-choice` : `multiple-choice`
        }
        onClick={(event) => handleChoice(event, props.text)}
        style={backgroundColor}
      >
        {props.text}
      </button>
    </div>
  );
}

export default AnswerChoices;

import React from "react";

function AnswerChoices(props) {
  const { handleChoice } = props;
  console.log(props);
  const borderColor = {
    borderColor: props.borderColor,
  };

  return (
    <div className="text-center">
      <button
        className="multiple-choice"
        onClick={(event) => handleChoice(event, props.text)}
        style={borderColor}
      >
        {props.text}
      </button>
    </div>
  );
}

export default AnswerChoices;

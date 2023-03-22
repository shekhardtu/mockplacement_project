import React, { useState } from "react";

export default function Question(props) {
  const { text, des, answer } = props;

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerSelection = (element) => {
    setSelectedAnswer(element);
    setShowAnswer(true);
  };

  return (
    <div className="container">
      <h4 className="ques my-1">{text}</h4>
      {showAnswer === false
        ? des.map((element, index) => {
            return (
              <div
                key={index}
                className="option my-3"
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  width: "700px",
                }}
                onClick={() => handleAnswerSelection(element)}
              >
                <div className="optNO">{element}</div>
              </div>
            );
          })
        : des.map((element, index) => {
            return (
              <div
                key={index}
                className="option my-3"
                style={
                  selectedAnswer === answer
                    ? des[index] === answer
                      ? {
                          border: "1px solid black",
                          borderRadius: "10px",
                          width: "700px",
                          cursor: "default",
                          color: "green",
                        }
                      : {
                          border: "1px solid black",
                          borderRadius: "10px",
                          width: "700px",
                          cursor: "default",
                        }
                    : des[index] === answer
                    ? {
                        border: "1px solid black",
                        borderRadius: "10px",
                        width: "700px",
                        cursor: "default",
                        color: "green",
                      }
                    : {
                        border: "1px solid black",
                        borderRadius: "10px",
                        width: "700px",
                        cursor: "default",
                        color: "red",
                      }
                }
              >
                <div className="optNO">{element}</div>
              </div>
            );
          })}
    </div>
  );
}

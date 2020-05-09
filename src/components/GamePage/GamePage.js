import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as DogAPI from "../../utils/dogApi";
import AnswerContainer from "../AnswerContainer/AnswerContainer";
import "./GamePage.css";

function GamePage() {
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const errorMsg = "Oops, something went wrong! :-(";
  const homeIcon = (
    <FontAwesomeIcon icon={faHome} size="3x" className="nav-icon" />
  );

  function getDoggoData() {
    const fetchDoggoPromise = DogAPI.fetchDoggo();

    fetchDoggoPromise.then((data) => {
      const { correctBreedName, image, multipleChoiceAnswers } = data;
      setImage(image);
      setBreed(correctBreedName);
      setMultipleChoiceAnswers(multipleChoiceAnswers);
    });

    fetchDoggoPromise.catch(console.error(errorMsg));
  }

  function increment() {
    setScore((prevScore) => prevScore + 1);
  }

  useEffect(() => {
    getDoggoData();
  }, []);

  return (
    <div className="page-container">
      <nav className="nav-bar">
        <Link to="/">{homeIcon}</Link>
      </nav>
      <span className="score-info">
        score: {score} - round {questionNumber}
      </span>
      <div className="game-page-main">
        <div className="dog-image-container">
          <img className="dog-image" src={image} alt="random dog" />
        </div>
        <div className="AnswerContainer">
          <AnswerContainer
            data={{
              breed: breed,
              multipleChoiceAnswers: multipleChoiceAnswers,
            }}
            incrementScore={increment}
          />
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////

// class App extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     image: "",
//     breed: "",
//     err: "",
//     multipleChoiceAnswers: [],
//     score: 0,
//     questionNumber: 1,
//   };

// this.error = this.error.bind(this);
// this.increment = this.increment.bind(this);
// this.getDoggoData = this.getDoggoData.bind(this);
// this.handleNewGame = this.handleNewGame.bind(this);
// this.handleArrowClick = this.handleArrowClick.bind(this);
// }

// componentDidMount() {
//   this.getDoggoData();
// }

// handleArrowClick() {
//   // event.preventDefault();
//   if (this.state.questionNumber <= 9) {
//     this.setState((prevState) => {
//       return {
//         questionNumber: prevState.questionNumber + 1,
//       };
//     });
//     this.getDoggoData();
//   }
// }

// handleNewGame() {
//   this.setState({
//     questionNumber: 1,
//     score: 0,
//   });
//   this.getDoggoData();
// }

// error() {
//   this.setState({ err: "Oops, something went wrong! :-(" });
// }

//   render() {
//     return (
//       <div>
//         {/* <span className="score">
//           Score: {this.state.score} - Round {this.state.questionNumber}
//         </span> */}

//         <div className="container-fluid mt-3">
//           <div className="row justify-content-center align-items-center contentContainer">
//             <div className="col-lg-4">
//               {this.state.err.length !== 0 ? <p>{this.state.err}</p> : null}
//               <img className="dogImage" src={this.state.image} />
//             </div>

//             <div className="multipleChoiceContainer col-lg-3">
//               {/* <AnswerContainer
//                 data={{
//                   breed: this.state.breed,
//                   multipleChoiceAnswers: this.state.multipleChoiceAnswers,
//                   incrementScore: this.increment,
//                 }}
//               /> */}
//             </div>
//             <button className="arrowIcon" onClick={this.handleArrowClick}>
//               {/* <IconContext.Provider value={{ size: "2em" }}>
//                 <FaArrowRight />
//               </IconContext.Provider> */}
//             </button>
//             <button className="newIcon" onClick={this.handleNewGame}>
//               {/* <IconContext.Provider value={{ size: "2.5em" }}>
//                 <MdFiberNew />
//               </IconContext.Provider> */}
//             </button>
//             <br />
//           </div>
//         </div>
//         {/* <p id="signature" class="fixed-bottom">
//           created by Sophie Tsai.
//         </p> */}
//       </div>
//     );
//   }
// }

export default GamePage;

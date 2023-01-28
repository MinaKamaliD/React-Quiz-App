import React from "react";
// import { Component } from "react";
import { useState } from "react";
import "./QuestionPage.css";

///// Functional Component

const QuestionPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What country has the highest life expectancy?",

      answerList: [
        { id: "a", answer: "Japan", status: false },
        { id: "b", answer: "Hong Kong", status: true },
        { id: "c", answer: "Finland", status: false },
        { id: "d", answer: "America", status: false },
      ],
    },
    {
      id: 2,
      question: "What is the most common surname in the United States?",

      answerList: [
        { id: "a", answer: "Jamie", status: false },
        { id: "b", answer: "Paul", status: false },
        { id: "c", answer: "Michael", status: false },
        { id: "d", answer: "Smith", status: true },
      ],
    },
    {
      id: 3,
      question: "Which planet in the Milky Way is the hottest?",

      answerList: [
        { id: "a", answer: "Venus", status: true },
        { id: "b", answer: "Mars", status: false },
        { id: "c", answer: "Earth", status: false },
        { id: "d", answer: "Mercury", status: false },
      ],
    },
    {
      id: 4,
      question: "Who discovered that the earth revolves around the sun?",

      answerList: [
        { id: "a", answer: "Aristotle", status: false },
        { id: "b", answer: "Isaac Newton", status: false },
        { id: "c", answer: "Nicolaus Copernicus", status: true },
        { id: "d", answer: "Archimedes", status: false },
      ],
    },
    {
      id: 5,
      question: "What country has won the most World Cups?",

      answerList: [
        { id: "a", answer: "Germany", status: false },
        { id: "b", answer: "Argentina", status: false },
        { id: "c", answer: "France", status: false },
        { id: "d", answer: "Brazil", status: true },
      ],
    },
  ]);

  const [questionNum, setQuestionNum] = useState(1);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const submitAnswer = (status) => {
    if (status) {
      setScore((prevState) => prevState + 1);
    }

    if (questionNum < questions.length) {
      setQuestionNum((prevState) => prevState + 1);
    } else {
      setFinished(true);
    }
  };

  if (!finished) {
    return (
      <div className="container">
        <section className="title">
          <div className="question-number">{`Question ${questionNum}`}</div>
          <div className="questions-number">{`/${questions.length}`}</div>
        </section>
        <p className="question">{questions[questionNum - 1].question}</p>
        <div className="answers">
          {questions[questionNum - 1].answerList.map((answer) => (
            <button
              key={answer.id}
              className="btn"
              onClick={submitAnswer.bind(null, answer.status)}
            >
              {answer.answer}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="score">
        <p className="quiz-result">Quiz result</p>
        <section className="result-section">
          <div className="result">{score}</div>
          <div className="result-number">{`/${questions.length}`}</div>
        </section>
      </div>
    );
  }
};

///// Class Component

// class QuestionPage extends Component {
//   constructor() {
//     super();

//     this.state = {
//       questions: [
//         {
//           id: 1,
//           question: "What country has the highest life expectancy?",

//           answerList: [
//             { id: "a", answer: "Japan", status: false },
//             { id: "b", answer: "Hong Kong", status: true },
//             { id: "c", answer: "Finland", status: false },
//             { id: "d", answer: "America", status: false },
//           ],
//         },
//         {
//           id: 2,
//           question: "What is the most common surname in the United States?",

//           answerList: [
//             { id: "a", answer: "Jamie", status: false },
//             { id: "b", answer: "Paul", status: false },
//             { id: "c", answer: "Michael", status: false },
//             { id: "d", answer: "Smith", status: true },
//           ],
//         },
//         {
//           id: 3,
//           question: "Which planet in the Milky Way is the hottest?",

//           answerList: [
//             { id: "a", answer: "Venus", status: true },
//             { id: "b", answer: "Mars", status: false },
//             { id: "c", answer: "Earth", status: false },
//             { id: "d", answer: "Mercury", status: false },
//           ],
//         },
//         {
//           id: 4,
//           question: "Who discovered that the earth revolves around the sun?",

//           answerList: [
//             { id: "a", answer: "Aristotle", status: false },
//             { id: "b", answer: "Isaac Newton", status: false },
//             { id: "c", answer: "Nicolaus Copernicus", status: true },
//             { id: "d", answer: "Archimedes", status: false },
//           ],
//         },
//         {
//           id: 5,
//           question: "What country has won the most World Cups?",

//           answerList: [
//             { id: "a", answer: "Germany", status: false },
//             { id: "b", answer: "Argentina", status: false },
//             { id: "c", answer: "France", status: false },
//             { id: "d", answer: "Brazil", status: true },
//           ],
//         },
//       ],

//       questionNum: 1,
//       finished: false,
//       score: 0,
//     };
//   }

//   submitAnswer(status) {
//     if (status) {
//       this.setState((prevState) => {
//         return { score: prevState.score + 1 };
//       });
//     }

//     if (this.state.questionNum < this.state.questions.length) {
//       this.setState((prevState) => {
//         return { questionNum: prevState.questionNum + 1 };
//       });
//     } else {
//       this.setState({ finished: true });
//     }
//   }

//   render() {
//     if (!this.state.finished) {
//       return (
//         <div className="container">
//           <section className="title">
//             <div className="question-number">{`Question ${this.state.questionNum}`}</div>
//             <div className="questions-number">
//               {`/${this.state.questions.length}`}
//             </div>
//           </section>
//           <p className="question">
//             {this.state.questions[this.state.questionNum - 1].question}
//           </p>
//           <div className="answers">
//             {this.state.questions[this.state.questionNum - 1].answerList.map(
//               (answer) => (
//                 <button
//                   key={answer.id}
//                   className="btn"
//                   onClick={this.submitAnswer.bind(this, answer.status)}
//                 >
//                   {answer.answer}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="score">
//           <p className="quiz-result">Quiz result</p>
//           <section className="result-section">
//             <div className="result">{this.state.score}</div>
//             <div className="result-number">{`/${this.state.questions.length}`}</div>
//           </section>
//         </div>
//       );
//     }
//   }
// }

export default QuestionPage;

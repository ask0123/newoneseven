import React, { useState } from 'react';

const MockTest = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const pythonQuestions = [
    {
      id: 1,
      question: "What is the output of: print(type([]))?",
      options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
      correctAnswer: "<class 'list'>"
    },
    {
      id: 2,
      question: "Which method adds an element at the end of a list?",
      options: ["insert()", "append()", "extend()", "add()"],
      correctAnswer: "append()"
    },
    {
      id: 3,
      question: "What is the output of: print(2 ** 3)?",
      options: ["6", "8", "9", "16"],
      correctAnswer: "8"
    },
    {
      id: 4,
      question: "Which is not a valid variable name in Python?",
      options: ["_variable", "variable123", "123variable", "my_variable"],
      correctAnswer: "123variable"
    },
    {
      id: 5,
      question: "What does len() return for a dictionary?",
      options: ["Number of key-value pairs", "Number of keys only", "Number of values only", "Memory size of dictionary"],
      correctAnswer: "Number of key-value pairs"
    }
  ];

  const javaQuestions = [
    {
      id: 1,
      question: "What is the default value of int variable?",
      options: ["0", "1", "null", "undefined"],
      correctAnswer: "0"
    },
    {
      id: 2,
      question: "Which is the entry point of a Java program?",
      options: ["start()", "run()", "main()", "execute()"],
      correctAnswer: "main()"
    },
    {
      id: 3,
      question: "Which keyword is used for inheritance?",
      options: ["implements", "extends", "inherits", "using"],
      correctAnswer: "extends"
    },
    {
      id: 4,
      question: "Arrays in Java are...",
      options: ["Objects", "Primitive datatypes", "References", "None of these"],
      correctAnswer: "Objects"
    },
    {
      id: 5,
      question: "What is the size of float in Java?",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      correctAnswer: "32 bits"
    }
  ];
  const reactQuestions = [
    {
      id: 1,
      question: "What is the virtual DOM?",
      options: ["A representation of the actual DOM", "A new type of database", "A framework for building mobile apps", "None of the above"],
      correctAnswer: "A representation of the actual DOM"
    },
    {
      id: 2,
      question: "Which hook is used to manage state in functional components?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useState"
    },
    {
      id: 3,
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "JavaScript and XML", "Java Syntax Extension", "None of the above"],
      correctAnswer: "JavaScript XML"
    },
    {
      id: 4,
      question: "Which of the following is a lifecycle method in React?",
      options: ["componentDidMount", "render", "getInitialState", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      id: 5,
      question: "What is the purpose of keys in React?",
      options: ["To identify elements in the virtual DOM", "To style components", "To create a unique identifier for components", "None of the above"],
      correctAnswer: "To identify elements in the virtual DOM"
    }
  ];

  const questions = selectedTest === 'python' ? pythonQuestions : selectedTest === 'java' ? javaQuestions : reactQuestions;

  const getOptionClassName = (question, option, submitted, answers) => {
    if (!submitted) return "bg-white hover:bg-gray-50";
    if (option === question.correctAnswer) return "bg-green-100 border-green-500";
    if (answers[question.id] === option && option !== question.correctAnswer) return "bg-red-100 border-red-500";
    return "bg-white opacity-50";
  };

  const handleTestSelect = (testType) => {
    setSelectedTest(testType);
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    const currentQuestions = selectedTest === 'python' ? pythonQuestions : selectedTest === 'java' ? javaQuestions : reactQuestions;
    let correctCount = 0;
    currentQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return (correctCount / currentQuestions.length) * 100;
  };

  const handleSubmit = () => {
    setScore(calculateScore());
    setSubmitted(true);
  };

  const resetTest = () => {
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  if (!selectedTest) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Python Programming Test</h2>
          <p className="mb-4">Test your Python programming knowledge with 5 MCQs</p>
          <button 
            onClick={() => handleTestSelect('python')}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Start Python Test
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Java Programming Test</h2>
          <p className="mb-4">Test your Java programming knowledge with 5 MCQs</p>
          <button 
            onClick={() => handleTestSelect('java')}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Start Java Test
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">React Programming Test</h2>
          <p className="mb-4">Test your React programming knowledge with 5 MCQs</p>
          <button 
            onClick={() => handleTestSelect('react')}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Start React Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <h2 className="text-xl font-bold">{selectedTest === 'python' ? 'Python' : selectedTest === 'java' ? 'Java' : 'React'} Programming Test</h2>
          <button 
            onClick={() => setSelectedTest(null)}
            className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Back to Test Selection
          </button>
        </div>

        <div>
          {questions.map((q) => (
            <div key={q.id} className="mb-8">
              <div className={`p-4 rounded-lg border-2 ${
                submitted 
                  ? answers[q.id] === q.correctAnswer 
                    ? "border-green-500 bg-green-50" 
                    : "border-red-500 bg-red-50"
                  : "border-gray-200"
              }`}>
                <p className="font-medium mb-4">{q.id}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((option, index) => (
                    <label 
                      key={index} 
                      className={`flex items-center space-x-2 p-3 rounded border-2 transition-colors duration-200 cursor-pointer ${
                        getOptionClassName(q, option, submitted, answers)
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleAnswerSelect(q.id, option)}
                        disabled={submitted}
                        className="w-4 h-4"
                      />
                      <span className={`${
                        submitted && option === q.correctAnswer ? "font-bold" : ""
                      }`}>
                        {option}
                      </span>
                      {submitted && (
                        <span className="ml-auto">
                          {option === q.correctAnswer && (
                            <span className="text-green-600">✓ Correct Answer</span>
                          )}
                          {answers[q.id] === option && option !== q.correctAnswer && (
                            <span className="text-red-600">✗ Your Answer</span>
                          )}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
                {submitted && answers[q.id] !== q.correctAnswer && (
                  <div className="mt-2 text-red-600">
                    Correct answer: {q.correctAnswer}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {!submitted ? (
            <button 
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== questions.length}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300"
            >
              Submit Test
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <p className="text-lg font-semibold">Your Score: {score.toFixed(1)}%</p>
                <p className="text-sm text-gray-600">
                  ({Math.round(score / 20)} out of {questions.length} correct)
                </p>
              </div>
              <button 
                onClick={resetTest}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Retake Test
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTest;
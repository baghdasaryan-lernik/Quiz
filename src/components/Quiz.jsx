import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./Quiz.css"

const Quiz = () => {
  
    const [result, setResult] = useState(false)
    const [question, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    

    const questions = [
      {
        text:"In which Italian city can you find the Colosseum?",
        answers:[
          {id:1, answer:"Paris", isCorrect:false},
          {id:2, answer:"Rome", isCorrect:true},
          {id:3, answer:"Mosscow", isCorrect:false},
          {id:4, answer:"Madrid", isCorrect:false}
        ]
      }, 
      {
          text:"How long is the border between the United States and Canada?",
        answers:[
          {id:1, answer:"3,525 miles", isCorrect:false},
          {id:2, answer:"4,525 miles", isCorrect:false},
          {id:3, answer:"5,525 miles", isCorrect:true},
          {id:4, answer:"6,525 miles", isCorrect:false}
        ]
      }, 
      {
          text:"What is the largest active volcano in the world?",
        answers:[
          {id:1, answer:"Mount Etna", isCorrect:false},
          {id:2, answer:"Mount Vesuvius", isCorrect:false},
          {id:3, answer:"Mouna Loa", isCorrect:true},
          {id:4, answer:"Mount Batur", isCorrect:false}
        ]
      },
      {
          text:"When did Lenin die?",
        answers:[
          {id:1, answer:"21 January 1924", isCorrect:true},
          {id:2, answer:"21 January 1934", isCorrect:false},
          {id:3, answer:"21 January 1944", isCorrect:false},
          {id:4, answer:"21 January 1954", isCorrect:false}
        ]
      },
      {
          text:"What is the largest continent in size?",
        answers:[
          {id:1, answer:"North America", isCorrect:false},
          {id:2, answer:"Europe", isCorrect:false},
          {id:3, answer:"Africa", isCorrect:false},
          {id:4, answer:"Asia", isCorrect:true}
        ]
      }

  ]

    

    const check = (isCorrect) => {
          if(isCorrect) setScore(score + 1)
          if(question + 1 < questions.length) setQuestion(question  + 1)
          else setResult(true)
     
    }


  return (
    <div className='container'> 
          {result ? <div className='table'><div className="header"><h3>You answered {score} of {questions.length} questions correctly</h3><h1>{100 / questions.length * score}%</h1></div><Link to='/'><button style={{width:200+"px"}}>Restart</button></Link></div> : <div className='table'><div className='header'>
            <h3>{questions[question].text}</h3>
            </div>
            <button onClick={() => {check(questions[question].answers[0].isCorrect)}}>{questions[question].answers[0].answer}</button>
            <button onClick={() => {check(questions[question].answers[1].isCorrect)}}>{questions[question].answers[1].answer}</button>
            <button onClick={() => {check(questions[question].answers[2].isCorrect)}}>{questions[question].answers[2].answer}</button>
            <button onClick={() => {check(questions[question].answers[3].isCorrect)}}>{questions[question].answers[3].answer}</button>
           <div className='footer'>
           <h3>{question + 1 + " of " + questions.length + " questions"}</h3>               
           </div>
            </div>} 
    </div>
  )
}

export default Quiz
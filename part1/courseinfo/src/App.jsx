// const Header = ({ course }) => {
//   return (
//     <h1>{course}</h1>
//   )
// }

// const Part = ({ parts, exercises }) => {
//   return (
//     <p>
//       {parts} {exercises}
//     </p>
//   )
// }

// const Content = ({ parts }) => {
//   return (
//     <div>
//       <Part parts={parts[0].name} exercises={parts[0].exercises} />
//       <Part parts={parts[1].name} exercises={parts[1].exercises} />
//       <Part parts={parts[2].name} exercises={parts[2].exercises} />
//     </div>
//   )
// }

// const Total = ({ parts }) => {
//   return (
//     <div>
//       Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
//     </div>
//   )
// }

// const App = () => {
//   const course = { 
//     name: 'Half Stack application development',
//     parts: [
//     {
//     name: 'Fundamentals of React',
//     exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]}

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

// export default App

import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={setToZero} text='zero'/>
      <Button onClick={decreaseByOne} text='minus'/>
    </div>
  )
}

export default App;
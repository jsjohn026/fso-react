const Part = ({ partName, exercises }) => {
  return (
    <div>
      <br />
      {partName}  {exercises} 
    </div>
  )
}


const Content = ({ parts }) => {
  const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
    <div>
      {parts.map(part => 
        <Part 
          key={part.id} 
          partName={part.name} 
          exercises={part.exercises} 
        />
      )}
      <br />
      <strong>total of {total} exercises</strong>
    </div>
  )
}


const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}


const Course = ({ course }) => {
  const { name, parts } = course 

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  )
}

export default Course
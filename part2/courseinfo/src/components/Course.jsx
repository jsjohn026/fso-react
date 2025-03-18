const Part = ({ partName, exercises }) => {
  return (
    <div>
      <br />
      {partName} 
      {exercises} 
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <div>
        {parts.map(part => 
          <Part 
            key={part.id} 
            partName={part.name} 
            exercises={part.exercises} 
          />
        )}
      </div>
    </div>
  )
}

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
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
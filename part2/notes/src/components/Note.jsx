const Note = (props) => {
  console.log(props);
  const { note } = props
  
  return <li>{note.content}</li>
}

export default Note
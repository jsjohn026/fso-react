const Filter = ({ searchLetters, handleSearchChange }) => {
  return (
    <div>
        filter shown with 
        <input value={searchLetters} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter
const Filter = ({ searchLetters, handleSearchChange }) => {
  return (
    <div>
      <span>find countries </span>
      <input value={searchLetters} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter
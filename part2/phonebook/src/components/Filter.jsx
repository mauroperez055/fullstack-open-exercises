const Filter = ({ value, onChange }) =>{
  return (
    <div>
      filter shown with a
      <input value={value} onChange={onChange}/>
    </div>
  )
}

export default Filter;
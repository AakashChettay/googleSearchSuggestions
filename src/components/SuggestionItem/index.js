import './index.css'

const SuggestionItem = ({suggestion, uniqueKey, onChange}) => {
  const loadClick = () => {
    onChange(uniqueKey)
  }

  return (
    <li className="suggestionStyle">
      <p className="para">{suggestion}</p>
      <img
        onClick={loadClick}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="icon"
        alt="Arrow Icon"
      />
    </li>
  )
}

export default SuggestionItem

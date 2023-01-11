// Write your code here

import './index.css'

const Suggestions = props => {
  const {googleDetails, updateSearchInput} = props
  const {suggestion} = googleDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default Suggestions

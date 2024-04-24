import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    filteredList: [],
  }

  onChange = event => {
    const text = event.target.value.toLowerCase()
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(sug => {
      const lowerSug = sug.suggestion.toLowerCase()
      return lowerSug.includes(text)
    })

    this.setState({filteredList})
  }

  loadingResult = uniqueKey => {
    const {suggestionsList} = this.props

    const selectedSuggestion = suggestionsList.find(sug => sug.id === uniqueKey)

    if (selectedSuggestion) {
      const searchElement = document.getElementById('searchElement')
      searchElement.value = selectedSuggestion.suggestion
      this.setState({filteredList: [selectedSuggestion]})
    }
  }

  render() {
    const {suggestionsList} = this.props
    const {filteredList} = this.state

    const displayList = filteredList.length ? filteredList : suggestionsList

    return (
      <div className="bgContainer">
        <img
          className="googleImgStyle"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="Google Logo"
        />
        <div className="suggestionAndInputContainer">
          <div className="inputSearchContainer">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="Search Icon"
            />
            <input
              id="searchElement"
              onChange={this.onChange}
              type="search"
              className="searchInput"
              placeholder="Search Google"
            />
          </div>
          <ul className="suggestionsListContainerStyle">
            {displayList.map(suggestionItem => (
              <SuggestionItem
                onChange={this.loadingResult}
                key={suggestionItem.id}
                suggestion={suggestionItem.suggestion}
                uniqueKey={suggestionItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

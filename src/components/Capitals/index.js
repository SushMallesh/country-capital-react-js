import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {displayCountry: countryAndCapitalsList[0].country}

  onSelectCapital = event => {
    const {value} = event.target
    const selectedCapital = countryAndCapitalsList.filter(
      eachItem => eachItem.id === value,
    )

    this.setState({displayCountry: selectedCapital[0].country})
  }

  render() {
    const {displayCountry} = this.state
    return (
      <div className="app-container">
        <div className="country-capital-container">
          <h1>Countries And Capitals</h1>
          <select className="options" onChange={this.onSelectCapital}>
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="question">is capital of which country</span>
          <p className="country">{displayCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

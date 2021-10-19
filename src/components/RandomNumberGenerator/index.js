import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="random-number-generator-bcg-container">
        <div className="random-number-generator-container">
          <h1 className="random-number-generator-heading"> Random Number</h1>
          <p className="random-number-generator-title">
            {' '}
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="random-number-generator-button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            {' '}
            Generate{' '}
          </button>
          <p className="random-number-text"> {number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

import React from "react"
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    document.title = "Dashboard"

    this.state = {
      text: 0
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.requestTest()}>Reducer => </button>
          <span>{this.props.text}</span>
        </div>
        <div>
          <button onClick={() => this.setState({ text: this.state.text + 1 })}>
            State =>{" "}
          </button>
          <span>{this.state.text}</span>
        </div>
      </div>
    )
  }
}

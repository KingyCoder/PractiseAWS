import React from "react"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    document.title = "Dashboard"
  }

  render() {
    return (
      <div>
        <span>This is the home page</span>
      </div>
    )
  }
}

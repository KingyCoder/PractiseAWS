import React from "react"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    document.title = "Page2"
  }

  render() {
    return (
      <div>
        <div>
          <span>This is page 2</span>
        </div>
      </div>
    )
  }
}

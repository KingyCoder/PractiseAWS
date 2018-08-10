import React from "react"

import Template from "../Template/Template"
import PageContent from "../PageContent/PageContent"
import Banner from "../Banner/Banner"

export default class AppWrapper extends React.Component {
  render() {
    return (
      <div className="App">
        <Template {...this.props}>
          <PageContent>
            <Banner />
            {this.props.children}
          </PageContent>
        </Template>
      </div>
    )
  }
}

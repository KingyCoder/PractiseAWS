import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePageContainer from "../containers/HomePageContainer"

import appInfo from "../../package.json"
// import serviceInfo from "../../service-config.json"
import AppWrapper from "./wrapper/AppWrapper/AppWrapper"

export default class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <main id="content" role="main">
          <Switch>
            <Route exact path="/" name="Home" component={HomePageContainer} />
            <Route exact="/home" component={HomePageContainer} />
            <Route exact="/about" component={HomePageContainer} />
          </Switch>
        </main>
      </AppWrapper>
    )
  }
}

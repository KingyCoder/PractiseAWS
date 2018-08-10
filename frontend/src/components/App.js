import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePageContainer from "../containers/HomePageContainer"
import Page2Container from "../containers/Page2Container"

import appInfo from "../../package.json"
// import serviceInfo from "../../service-config.json"
import AppWrapper from "./wrapper/AppWrapper/AppWrapper"

export default class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <main id="content" role="main">
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/home" component={Page2Container} />
            <Route path="/about" component={HomePageContainer} />
          </Switch>
        </main>
      </AppWrapper>
    )
  }
}

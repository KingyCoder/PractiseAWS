import { connect } from "react-redux"
import HomePage from "../components/homepage/HomePage"
import { requestTest } from "../actions/homepageAction"

const mapStateToProps = state => ({
  text: state.homepage.text
})

const mapDispatchToProps = {
  requestTest
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer

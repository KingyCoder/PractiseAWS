import { connect } from "react-redux"
import HomePage from "../components/homepage/HomePage"

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer

import { connect } from "react-redux"
import Page2 from "../components/page2/Page2"

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2)

export default HomePageContainer

import React from 'react'
import { getAllCategories } from '../../redux/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends React.Component {

  state = {

  }

  render() {
    return (
      <Text>
        {this.props.getAllCategories()}
      </Text>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllCategories,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


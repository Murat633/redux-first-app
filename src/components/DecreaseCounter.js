import React, { Component } from 'react'
import { decreaseCounter } from '../redux/actions/counterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {
                    this.props.dispatch(decreaseCounter())
                }}>1 Eksilt</button>
            </div>
        )
    }
}


function mapDisapatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapDisapatchToProps)(DecreaseCounter)
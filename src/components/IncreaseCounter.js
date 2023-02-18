import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { increaseCounter } from '../redux/actions/counterActions'

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {
                    this.props.dispatch(increaseCounter())
                }}>1 Arttır</button>
            </div>
        )
    }
}

function mapDisapatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch) }
}

export default connect(mapDisapatchToProps)(IncreaseCounter)
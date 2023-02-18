import React, { Component } from 'react'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={e => {
                        this.props.dispatch(increaseByTwoCounter())
                    }}>2 Arttır</button>
                </div>
            </div>
        )
    }
}

function mapDisapatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}


export default connect(mapDisapatchToProps)(IncreaseByTwoCounter)
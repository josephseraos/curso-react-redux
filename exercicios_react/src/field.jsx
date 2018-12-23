import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue } from './fieldActions'

class Field extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.valor}</h1>
                <input type="text" value={this.props.valor} onChange={this.props.changeValue} />
            </React.Fragment>
        )
    }
}

// decorator
function mapStateToProps(state) {
    return {
        valor: state.field.value
    }
}

// decorator
function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

// export default Field

export default connect(mapStateToProps, mapDispatchToProps)(Field)

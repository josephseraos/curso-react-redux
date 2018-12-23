import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.valor}</h1>
                <input type="text" value={this.props.valor} onChange={this.handleChanged} />
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

// export default Field

export default connect(mapStateToProps)(Field)

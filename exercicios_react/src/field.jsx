import React from 'react'

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = { valor: this.props.valor }
        // this.state = { valor: undefined }
        this.handleChanged = this.handleChanged.bind(this)
    }

    handleChanged(e) {
        this.setState({valor: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.valor}</h1>
                <input type="text" value={this.state.valor} onChange={this.handleChanged} />
            </React.Fragment>
        )
    }
}

export default Field

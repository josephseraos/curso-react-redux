import React, { Component } from 'react'

class Grid extends Component {
    toCssClasses(numbers = []) {
        let classes = ''
        
        if (numbers[0]) classes += `col-xs-${numbers[0]}`
        if (numbers[1]) classes += ` col-sm-${numbers[1]}`
        if (numbers[2]) classes += ` col-md-${numbers[2]}`
        if (numbers[3]) classes += ` col-lg-${numbers[3]}`
        if (numbers[4]) classes += ` col-xl-${numbers[4]}`

        return classes
    }

    render() {
        return (
            <div className={this.toCssClasses(this.props.cols || 12)}>
                { this.props.children }
            </div>
        )
    }
}

export default Grid

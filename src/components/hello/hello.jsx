import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './hello.less'

class Hello extends Component {
    render() {
        return (
            <p className="hello" onClick={() => this.props.actions.ADD_MESSAGE(this.props.addmessage)}>Hello React</p>
        )
    }
}

Hello.propTypes = {
    actions: PropTypes.object.isRequired,
    addmessage: PropTypes.object
}

export default Hello

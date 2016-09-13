import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addMessage} from '../../actions'
import './app.less';
class App extends Component {

    onClick() {
        this.props.actions.addMessage(this.props.addmessage)
    }

    render() {
        return (
            <p className="hello" onClick={() => this.onClick()}>Hello React</p>
        )
    }
}

export default connect((store) => {
    return {addmessage: store.addmessage}
}, (dispatch) => {
    return {
        actions: bindActionCreators({
            addMessage
        }, dispatch)
    }
})(App);

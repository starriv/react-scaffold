import React, {Component, PropTypes} from 'react';
import './hello.less';

class Hello extends Component {

    render() {
        return (
            <p className="hello" onClick={ () => this.props.actions.addMessage(this.props.addmessage) }>Hello React</p>
        );
    }
}

Hello.propTypes = {
    actions: PropTypes.object.isRequired,
    addmessage: PropTypes.object
};

export default Hello;

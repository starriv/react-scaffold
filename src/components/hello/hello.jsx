import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addMessage} from '../../actions';
import './hello.less';
class Hello extends Component {

    static propTypes = {
        // action
        actions: PropTypes.object.isRequired,

        //初始的state
        addmessage: PropTypes.object
    }

    render() {
        const {actions, addmessage} = this.props;
        return (
            <p className="hello" onClick={() => actions.addMessage(addmessage)}>Hello React</p>
        );
    }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {addmessage: state.addmessage};
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            addMessage
        }, dispatch)
    };
}
/**
* 通过connect 链接 Redux store. 统一分发 state 和 actions.
* 实际这里应该传入一个根组件. 通过根组件分发
**/
// ES7 Decorators简化版
// @connect(mapStateToProps, mapDispatchToProps )
// export default class hello{}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

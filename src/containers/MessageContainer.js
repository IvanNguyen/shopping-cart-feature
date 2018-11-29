import React, { Component } from 'react';
import Message from './../components/Message';
import {connect} from 'react-redux'

class MessageComponent extends Component{

    
    render(){
        var {message}=this.props;
        return(
            <Message message={message}>
            </Message>
        )
    }    
}

const mapStateToProps = state => {
    return{
        message: state.message
    }
}
export default connect(mapStateToProps,null)(MessageComponent);
import React, {Component, PropTypes} from 'react';
import render from 'react-dom';
import store from './redux/store/store';
import constants from './redux/constants/constants';

class AppContainer extends Component{
    constructor(...args){
        super(...args);
        store.dispatch({type:constants.CREATE_ACCOUNT});
        this.state = {
            balance: store.getState().balance
        }
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState({balance: store.getState().balance}));
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
}
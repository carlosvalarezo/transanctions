import React, {Component} from 'react';
import store from './redux/store/store';
import constants from './redux/constants/constants';
import App from './App';

export default class AppContainer extends Component{
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

    render () {
        return(<App balance={store.getState().balance}
                onDeposit={amount => store.dispatch({type:constants.DEPOSIT_INTO_ACCOUNT, amount:amount})}
                onWithdraw={amount=> store.dispatch({type:constants.WITHDRAW_FROM_ACCOUNT, amount:amount}) }/>);
    }

};
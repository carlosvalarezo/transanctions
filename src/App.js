import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';

import store from './redux/store/store';
import constants from './redux/constants/constants';

const handleDeposit = () => {
  this.props.onDeposit(this.refs.amount.value);
  this.refs.amount.value = '';
}

const handleWithdraw = () => {
  this.props.onWithdraw(this.refs.amount.value);
  this.refs.amount.value = '';
}

const App = () => 
    <div>
      <h1>Your balance is${(this.props.balance).toFixed(2)}</h1>
      <div>
        <input type="text" placeholder="Enter amount" ref="amount"/>
        <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
        <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
      </div>
    </div>;

App.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
}

export default App;

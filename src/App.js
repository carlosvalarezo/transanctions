import React, {Component} from 'react';

class App extends Component{
  handleDeposit(){
    this.props.onDeposit(parseInt(this.refs.amount.value,0));
    this.refs.amount.value = '';
  }

  handleWithdraw(){
    this.props.onWithdraw(parseInt(this.refs.amount.value,0));
    this.refs.amount.value = '';
  }
  render(){
    return(<div>
      <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
      <div>
        <input type="text" placeholder="Enter amount" ref="amount"/>
        <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
        <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
      </div>
    </div>);

  }
}


export default App;

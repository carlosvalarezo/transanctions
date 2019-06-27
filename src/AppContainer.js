import { connect } from 'react-redux';
import App from './App';
import actionCreator from './redux/actions/actionCreator';

const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: amount => dispatch(actionCreator.depositIntoAccount(amount)),
        onWithdraw: amount => dispatch(actionCreator.withDrawFromAccount(amount))
    }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
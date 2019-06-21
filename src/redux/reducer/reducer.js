import constants from '../constants/constants';

const initialState = {
    balance: 0
}

const reducer = (state, payload) => {

    console.log(payload.action);
    const {type} = payload.action;
    const {data} = payload;

    switch(type){
        case constants.CREATE_ACCOUNT:
            return initialState;
        case constants.DEPOSIT_INTO_ACCOUNT:
            return {balance: state.balance + data.amount}
        case constants.WITHDRAW_FROM_ACCOUNT:
            return {balance: state.balance - data.amount}
        default:
            return state;

    }
}

export default reducer;
import constants from '../constants/constants';

const initialState = {
    balance: 0
}

const reducer = (state = initialState, payload) => {

    const {type, amount} = payload;

    switch(type){
        case constants.CREATE_ACCOUNT:
            return initialState;
        case constants.DEPOSIT_INTO_ACCOUNT:
            return {balance: state.balance + amount}
        case constants.WITHDRAW_FROM_ACCOUNT:
            return {balance: state.balance - amount}
        default:
            return state;

    }
}

export default reducer;
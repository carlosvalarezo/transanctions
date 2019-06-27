import constants from '../constants/constants';

const actionCreator = {
    withDrawFromAccount(amount){
        return {
            type: constants.WITHDRAW_FROM_ACCOUNT,
            amount
        }
    },
    depositIntoAccount(amount){
        return {
            type: constants.DEPOSIT_INTO_ACCOUNT,
            amount
        }
    }
}

export default actionCreator;
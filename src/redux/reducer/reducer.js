import constants from '../constants/constants';

const initialState = {
    balance: 0
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case constants.CREATE_ACCOUNT:
            return initialState;

    }
}
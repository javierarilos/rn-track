import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'sign_up':
            return {...state, isSignedIn: true, token: action.token, errorMessage: ''}
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            dispatch({type: 'sign_up', payload: response.token})
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
            dispatch({type: 'add_error', payload: 'error during sign up.'})
        }
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
    }
};

const signout = (dispatch) => {
    return () => {
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false, errorMessage: '', token: '' }
);
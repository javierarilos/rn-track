import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            }
        case 'signin':
            return {
                token: action.token,
                isAuthInitialized: true,
                isSignedIn: true,
                errorMessage: ''
            }
        case 'signout':
            return {
                token: '',
                isAuthInitialized: true,
                isSignedIn: false,
                errorMessage: ''
            }
        case 'clear_error':
            return {
                ...state,
                errorMessage: ''
            }
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            return true;
        } catch (err) {
            console.log(err.response.data);
            dispatch({ type: 'add_error', payload: 'error during sign up.' })
            return false;
        }
    }
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            return true;
        } catch (err) {
            console.log(err.response.data);
            dispatch({ type: 'add_error', payload: 'error during sign in.' })
            return false;
        }
    }
};

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({type: 'clear_error'})
    }
}

const signout = (dispatch) => {
    return async () => {
        console.log('Sign out by user request.');
        await AsyncStorage.removeItem('token');
        const currentToken = await AsyncStorage.getItem('token');
        console.log('Current token in Storage=' + currentToken);
        dispatch({type: 'signout'});
    }
};

const loadAuth = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        const isIt = token !== '' && token !== null;
        console.log("- isSignedIn=" + isIt + ' token=' + token);
        console.log(token);
        dispatch({type: isIt ? 'signin' : 'signout', payload: isIt})
    }
};

let initialState = { isAuthInitialized: false, isSignedIn: false, errorMessage: '', token: null }

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, loadAuth, clearErrorMessage },
    initialState
);
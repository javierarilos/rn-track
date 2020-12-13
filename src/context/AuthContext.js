import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return {
                token: action.token,
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
            dispatch({ type: 'signup', payload: response.token })
        } catch (err) {
            console.log(err.response.data);
            dispatch({ type: 'add_error', payload: 'error during sign up.' })
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

const isSignedIn = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        const isIt = token !== '' && token !== null;
        console.log("- isSignedIn=" + isIt + ' token=' + token);
        console.log(token);
        return isIt;
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, isSignedIn },
    { isSignedIn: false, errorMessage: '', token: null }
);
import {types} from '../types/types';
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from './ui';

export const startLoginWithGoogle =()=>{
    return async (dispatch)=>{
        dispatch (startLoading());
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user})=>{
                dispatch(login(user.uid, user.displayName));
                dispatch (finishLoading());
            })
            .catch((err)=>{
                dispatch (finishLoading());
            });
    }
}


export const startLogout=()=>{
    return async(dispatch)=>{
        dispatch (startLoading());
        await firebase.auth().signOut()
            .then(()=>{
                dispatch(logout());
                dispatch (finishLoading());
            })
            .catch((err)=>{
                dispatch (finishLoading());
            });
    }
}

export const login=(uid, displayName)=>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
});

export const logout =()=>({
    type: types.logout
});
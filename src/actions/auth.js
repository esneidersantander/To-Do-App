import {types} from '../types/types';
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { todoLogout } from './todo';


export const startRegisterWithEmailPasswordName = (name, email, password) =>{
    return (dispatch)=>{
        dispatch (startLoading());
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async({user})=>{
                await user.updateProfile({displayName:name});
                dispatch(login(user.uid, user.displayName));
                dispatch (finishLoading());
            })
            .catch((err)=>{
                dispatch (finishLoading());
                Swal.fire('Error', err.message, 'error')
            });
    }
}


export const startLoginWithEmailAndPassword =(email, password)=>{
    return (dispatch)=>{
        dispatch (startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})=>{
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading())
            }).catch((err)=>{
                dispatch(finishLoading())
                Swal.fire('Error', err.message, 'error')
            })
    }
}
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
                dispatch (finishLoading());
                dispatch(todoLogout());
                dispatch(logout());
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
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import validator from 'validator';
import { login, startLoginWithEmailAndPassword, startLoginWithGoogle } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
export const LoginScreen = () => {

    const {loading} = useSelector(state => state.ui);
    const {msgError} = useSelector(state => state.ui);
    
    const [formValues, handleInputChange] = useForm({email:'', password:''});
    const{email, password}=formValues;


    const dispatch = useDispatch();

    const handleLogin = (e)=>{
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginWithEmailAndPassword(email, password));
        }
    }
    const handleLoginGoogle = (e)=>{
        e.preventDefault();
        dispatch(startLoginWithGoogle());
    }

    const isFormValid = ()=>{
        if (!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            return false;
        } else if(password.length < 5){
            dispatch(setError('Password must be at least 6 characters'));
            return false
        }

        dispatch(removeError());  
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>   
            <form 
                onSubmit={handleLogin}
            >
                {
                    msgError&&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button 
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    Login
                </button>
                <hr/>
                <div className="auth__social-network">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={handleLoginGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    className="link"
                    to="/auth/register"
                >
                    Create new account
                </Link>
                

            </form>
        </>
    )
}

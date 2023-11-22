import { useForm, SubmitHandler } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useDarkModeContext } from "../../context/DarkMode";

type LoginInputs = {
    username: string;
    password: string;
};

const LoginForm = () => {

    const { getClassName } = useDarkModeContext()

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>();
    
    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
    dispatch({ type: 'LOGIN', payload: data });
        navigate('/home')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input required className="input" type="text" placeholder="Username" autoComplete="off"
                {...register('username', { required: true, minLength:4, maxLength:20 })}
            />
            {errors.username && (
                <span className='error-message'>
                {errors.username.type === 'required' && 'Username is required'}
                {errors.username.type === 'minLength' && 'Username must have at least 4 characters'}
                {errors.username.type === 'maxLength' && 'Username cannot be longer than 20 characters'}
                </span>
            )}

            <input className="input" type="password" id="password" placeholder="Password" autoComplete="off"
                {...register('password', { required: true, minLength: 6 })}
            />
            {errors.password && (
                <span className='error-message'>Password must have at least 6 characters</span>
            )}

            <div className="container-check">
                <label className="container">
                    <input type="checkbox" name="checkbox"/>
                    <svg viewBox="0 0 64 64" height="1.5em" width="1.5em">
                        <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className={getClassName("path")}></path>
                    </svg>
                    <p>Remind me</p>
                </label>
            </div>
            
                <input className="login-button" type="submit" value="Sign In" />
            
            <span className={getClassName("sign-up")}>Don't have an account?<NavLink to={"/sign-up"}>Sign up</NavLink></span>

        </form>
    )
}

export default LoginForm
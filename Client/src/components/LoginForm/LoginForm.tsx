import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { NavLink } from 'react-router-dom';

type LoginInputs = {
    username: string;
    password: string;
};


type Props = {}

const LoginForm = (props: Props) => {

    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        
        console.log(data)
    }

    const validateUsername = (value: string) => {
        if (/^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/.test(value) || value.length < 8) {
            return 'Invalid'
        }
        return true
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input required className="input" type="text" placeholder="E-mail or Username"
                {...register('username', { validate: validateUsername })}
            />
            {errors.username && (
                <span className='error-message'>{errors.username.message}</span>
            )}

            <input className="input" type="password" id="password" placeholder="Password"
                {...register('password', { required: true, minLength: 6 })}
            />
            {errors.password && (
                <span className='error-message'>Password must have at least 6 characters</span>
            )}

            <div className="container-check">
                <label className="container">
                    <input type="checkbox" />
                    <svg viewBox="0 0 64 64" height="1.5em" width="1.5em">
                        <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                    </svg>
                    <p>Remind me</p>
                </label>
            </div>
            <NavLink to={"/home"}>
                <input className="login-button" type="submit" value="Sign In" />
            </NavLink>
            <span className="forgot-password">Don't have an account?<a href="#">Sign up</a></span>

        </form>
    )
}

// ^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$

export default LoginForm
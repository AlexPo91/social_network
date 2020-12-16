import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../utils/validator'
import {createField, Input} from '../../utils/FormsControl'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import styles from '../../utils/FormsControl.module.css'
let maxLength20 = maxLength(20)
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('text', Input, 'email', 'Login', [required, maxLength20])}
            {createField('password', Input, 'password', 'Password', [required, maxLength20])}
            {createField('checkbox', Input, 'rememberMe', null, null, 'Remember Me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('text', Input, 'captcha', 'Captcha', [required])}
            {error && <div className={styles.formSummuryError}>{error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.captcha)
    }
    if(isAuth) return <Redirect to='/profile'/>
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStatetoProps, {login})(Login)
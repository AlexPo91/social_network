import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../utils/validator'
import {Input} from '../../utils/FormsControl'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import styles from '../../utils/FormsControl.module.css'
let maxLength20 = maxLength(20)
const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type={"text"} component={Input} name={'email'} placeholder={'Login'} validate={[required, maxLength20]}/></div>
            <div><Field type={"password"} component={Input} name={'password'} placeholder={'Password'} validate={[required, maxLength20]}/></div>
            <div><Field type={"checkbox"} component="input" name={'rememberMe'}/>Remember Me</div>
            {props.error && <div className={styles.formSummuryError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password)
    }
    if(props.isAuth) return <Redirect to='/profile'/>
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStatetoProps, {login})(Login)
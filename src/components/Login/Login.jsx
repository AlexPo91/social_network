import React from 'react'
import { Field, reduxForm } from 'redux-form'
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type={"text"} component="input" name={'login'} placeholder={'Login'}/></div>
            <div><Field type={"text"} component="input" name={'password'} placeholder={'Password'}/></div>
            <div><Field type={"checkbox"} component="input" name={'rememberMe'}/>Remember Me</div>
            <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
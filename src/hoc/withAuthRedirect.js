import React from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

export const withAuthRedirect = (Component) => {
    const mapStatetoPropsFromRedirect = (state) => {
        return {
          isAuth: state.auth.isAuth
        };
      };
    let RedirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props}/>
    }
    return connect(mapStatetoPropsFromRedirect)(RedirectComponent)
}
import React, {Suspense} from 'react'


export const withSuspense = (Component) => {
    return (props)=>{
      return <Suspense fallback={<div>Загрузка...</div>}>
      <Component {...props} />
    </Suspense>
    }
}
// export const withSuspense = (Component) => {
//     const mapStatetoPropsFromRedirect = (state) => {
//         return {
//           isAuth: state.auth.isAuth
//         };
//       };
//     let RedirectComponent = (props) => {
//         if(!props.isAuth) return <Redirect to='/login'/>
//         return <Component {...props}/>
//     }
//     return connect(mapStatetoPropsFromRedirect)(RedirectComponent)
// }
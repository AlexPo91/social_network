const SET_USER_AUTH = 'SET_USER_AUTH'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case 'SET_USER_AUTH':
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        default: return state
    }
}

export const setUserAuth = (id, email,login) => {
    // console.log(id, email, login)
    return{
        type: SET_USER_AUTH,
        userData: {id, email, login}
    }
}

export default authReducer
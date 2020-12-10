export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getStatus = (state) => {
    return state.profilePage.status
}

export const getAuthorizedId = (state) => {
    return state.auth.id
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}

export const getLogin = (state) => {
    return state.auth.login
}

export const getUsersPage = (state) => {
    return state.usersPage
}
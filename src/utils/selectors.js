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
    return state.usersPage.users
}

export const getIsFetching = state => {
    return state.usersPage.isFetching
}
export const getCurrentPage = state => {
    return state.usersPage.currentPage
}
export const getPageSize = state => {
    return state.usersPage.pageSize
}
export const getTotalCount = state => {
    return state.usersPage.totalCount
}
export const getFollowInPropgress = state => {
    return state.usersPage.followInPropgress
}
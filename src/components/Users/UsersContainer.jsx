import React from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { followAC, setUsersAC, unFollowAC, setTotalCountAC, setCurrentPageAC } from '../../redux/usersPageReducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId){
            dispatch(followAC(userId))
        },
        unFollow(userId){
            dispatch(unFollowAC(userId))
        },
        setUsers(users){
            dispatch(setUsersAC(users))
        },
        setTotalCount(count){
            dispatch(setTotalCountAC(count))
        },
        setCurrentPage(page){
            dispatch(setCurrentPageAC(page))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
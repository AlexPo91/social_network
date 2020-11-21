import React from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { followAC, setUsersAC, unFollowAC } from '../../redux/usersPageReducer'
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
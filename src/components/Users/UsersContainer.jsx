import React from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import {
    follow,
    setUsers,
    unFollow,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching,
    toggleIsFollow
} from '../../redux/usersPageReducer'
import Users from './Users'
import styles from "./Users.module.css";
import photoUser from "../../assets/image/photo.png";
import Preloader from "../common/Preloader";
import { usersApi } from '../../api/api'

class UsersApiContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.toggleIsFetching(true)
        // fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        // {credentials: 'include'})
        //     .then((data) => data.json())
        usersApi.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
        .then((parseData) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(parseData.items)
                this.props.setTotalCount(parseData.totalCount)
            });
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        // fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`,
        // {credentials: 'include'})
        //     .then((data) => data.json())
        usersApi.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then((parseData) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(parseData.items)
                this.props.setTotalCount(parseData.totalCount)
            });
    }
    render() {
        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/> :
                    <Users
                        totalCount={this.props.usersPage.totalCount}
                        pageSize={this.props.usersPage.pageSize}
                        currentPage={this.props.usersPage.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.usersPage.users}
                        followInPropgress={this.props.usersPage.followInPropgress}
                        unFollow={this.props.unFollow}
                        follow={this.props.follow}
                        toggleIsFollow={this.props.toggleIsFollow}
                    />
                }

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow(userId){
//             dispatch(followAC(userId))
//         },
//         unFollow(userId){
//             dispatch(unFollowAC(userId))
//         },
//         setUsers(users){
//             dispatch(setUsersAC(users))
//         },
//         setTotalCount(count){
//             dispatch(setTotalCountAC(count))
//         },
//         setCurrentPage(page){
//             dispatch(setCurrentPageAC(page))
//         },
//         toggleIsFetching: (isFetching)=>{
//           dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleIsFollow
})(UsersApiContainer)
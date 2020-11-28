import React from "react";
import MyPosts from "./MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from './../../redux/profilePageReducer'
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((data) => data.json())
            .then((parseData) => {
                this.props.setUserProfile(parseData)
            });
    }
    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let withRouterUrlProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withRouterUrlProfileContainer);

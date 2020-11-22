import React from "react";
import styles from "./Users.module.css";




const Users = (props) => {
  
if(props.usersPage.users.length === 0) {
  // props.setUsers(
  //   [
  //     {id: 1, fullName: 'Alex', status: 'I\'m boss', followed: true, photoUrl: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg', location: {city: 'Minsk', country: 'Belarus'}},
  //     {id: 2, fullName: 'Dima', status: 'I\'m boss too', followed: false, photoUrl: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg', location: {city: 'Moscow', country: 'Russia'}},
  //     {id: 3, fullName: 'Sasha', status: 'I\'m boss too', followed: false, photoUrl: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg', location: {city: 'Kiev', country: 'Ukraine'}}
  //   ]
  //   )
  //   console.log(props.usersPage)
  }
return <div>
  { props.usersPage.users.map((user) =>
      <div className={styles.usersPage} key={user.id}>
        <div>
          <img src={user.photoUrl} />
          <div>{user.followed ? <button onClick={()=>{props.unFollow(user.id)}}>Unfollowed</button> : <button onClick={()=>{props.follow(user.id)}}>Followed</button>}</div>
        </div>
        <div>
    <div>{user.fullName}</div>
    <div>{user.status}</div>
        </div>
    <div>{`${user.location.city} ${user.location.country}`}</div>
        <div></div>
      </div>
  )}
</div>
  
};

export default Users;

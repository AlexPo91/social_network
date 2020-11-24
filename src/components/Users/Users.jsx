import React from "react";
import styles from "./Users.module.css";
import photoUser from "../../assets/image/photo.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
    .then((data) => data.json())
    .then((parseData) => {
      this.props.setUsers(parseData.items)
      this.props.setTotalCount(parseData.totalCount)
    });
}
  onPageChanged = (pageNumber) =>{
    this.props.setCurrentPage(pageNumber)
    fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
    .then((data) => data.json())
    .then((parseData) => {
      this.props.setUsers(parseData.items)
      this.props.setTotalCount(parseData.totalCount)
    });
  }
  render() {
    let pagesCount = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize)
    let arrPages = []
    for(let i = 1; i <= pagesCount; i++){
      arrPages.push(i)
    }
    return (
      <div>
        <div>
          {arrPages.map(el=>{
              return <span key={el} className={this.props.usersPage.currentPage === el ? styles.selected : null} onClick={()=>{this.onPageChanged(el)}}>{el}</span>
          })}
        </div>
        {this.props.usersPage.users.map((user) => (
          <div className={styles.usersPage} key={user.id}>
            <div>
              <img
                src={user.photos.large !== null ? user.photos.large : photoUser}
              />
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(user.id);
                    }}
                  >
                    Unfollowed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    Followed
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    );
  }
}

// const Users = (props) => {

// let addUser = () => {
//   if(props.usersPage.users.length === 0) {
//     fetch('https://social-network.samuraijs.com/api/1.0/users')
//     // .then(data=>console.log(data))
//     .then(data => data.json())
//     .then(parseData => props.setUsers(parseData.items))
//     }
// }
// return <div>
//   <button onClick={addUser}>Add user</button>
//   { props.usersPage.users.map((user) =>
//       <div className={styles.usersPage} key={user.id}>
//         <div>
//           <img src={user.photos.large !== null ? user.photos.large : photoUser} />
//           <div>{user.followed ? <button onClick={()=>{props.unFollow(user.id)}}>Unfollowed</button> : <button onClick={()=>{props.follow(user.id)}}>Followed</button>}</div>
//         </div>
//         <div>
//     <div>{user.name}</div>
//     <div>{user.status}</div>
//         </div>
//     {/* <div>{`${user.location.city} ${user.location.country}`}</div> */}
//         <div></div>
//       </div>
//   )}
// </div>

// };

export default Users;

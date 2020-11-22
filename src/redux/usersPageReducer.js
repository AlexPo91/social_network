const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

const initialState = {
  users: 
  [
    {id: 1, fullName: 'Alex', status: 'I\'m boss', followed: true, photoUrl: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, fullName: 'Dima', status: 'I\'m boss too', followed: false, photoUrl: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, fullName: 'Sasha', status: 'I\'m boss too', followed: false, photoUrl: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg', location: {city: 'Kiev', country: 'Ukraine'}}
  ]
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
        return {
          ...state,
          users: state.users.map(user=>{
            if(user.id === action.id){
              return {...user, followed: true}
            }
            return user
          })
        }
      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(user=>{
            if(user.id === action.id){
              return {...user, followed: false}
            }
            return user
          })
        }
      case SET_USERS:
        return {
          ...state, users: [...state.users, ...action.users]
        }

    default: return state
  }
};

export const followAC = (userId) => {
    return {
      type: FOLLOW,
      id: userId
    }
  }
  export const unFollowAC = (userId) => {
    return {
      type: UNFOLLOW,
      id: userId
    }
  }
  export const setUsersAC = (users) => {
    return {
      type: SET_USERS,
      users: users
    }
  }

export default usersPageReducer;

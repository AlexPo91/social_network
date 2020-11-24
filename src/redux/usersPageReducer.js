const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


const initialState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 100

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
          ...state, users: [...action.users]
        }
      case SET_TOTAL_COUNT:
        return {
          ...state, totalCount: action.totalCount
        }
      case SET_CURRENT_PAGE:
        return {
          ...state, currentPage: action.currentPage
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
  export const setTotalCountAC = (count) => {
    return {
      type: SET_TOTAL_COUNT,
      totalCount: count
    }
  }
  export const setCurrentPageAC = (page) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage: page
    }
  }

export default usersPageReducer;
